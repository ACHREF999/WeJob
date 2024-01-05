
'use client'
import useProposalModal from '@/hooks/useProposalModal'
import Modal from './Modal'
import Select from 'react-select'
import {useState} from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'


function ProposalModal() {
    const proposalModal = useProposalModal()
    const [duration,setDuration] = useState<number|undefined>()
    const [letter,setLetter] = useState('')
    const [price,setPrice] = useState<number|undefined>()
    const [pricing,setPricing] = useState('FIXED')

    const [isLoading,setIsLoading] = useState(false)
    
    const pricingOptions = [
        {value:"FIXED",label:'Fixed'},
        {value:"HOURLY",label:'Hourly'},
    ]

    const durationOptions = [
        { value: 1, label: '1 Week' },
        { value: 2, label: '2 Weeks' },
        { value: 3, label: '3 Weeks' },
        { value: 4, label: '1 month' },
        { value: 6, label: '6 Weeks' },
        { value: 8, label: '2 months' },
        // { value: 12, label: 'Three Months' },
    ]


    // console.log(price)
    // console.log(pricing)
    // console.log(duration)
    // console.log(letter)


    const durationStyles = {
        control: (styles:any) => ({
            ...styles,
            paddingTop: '4px',
            paddingBottom: '4px',
            // borderColor:"#00000000",
            // borderRight:"solid 1px #00000055",
            // borderRadius:"0px",
            // paddingRight:"10px",
        }),
        singleValue: (styles:any) => ({
            ...styles,
            color: '#555',
            fontWeight: 600,
            fontSize: '16px',
            paddingLeft: '6px',
        }),
    }

    const bodyContent = (
        <>
            <div className="flex flex-col gap-4 pt-4">
                <h2>How Long will this project take</h2>

                <Select
                    onChange={(e) => setDuration((e as any)?.value )}
                    options={durationOptions as any}
                    // theme={customTheme}
                    styles={durationStyles}
                    // isSearchable
                    autoFocus
                    placeholder="Type"
                    className="w-[40%]"
                    defaultValue={'TALENT'}
                />
                <h2>Letter</h2>
                <textarea
                    className=" resize-none w-full p-3 text-lg border-neutral-300  transition disabled:bg-opacity-70 disabled:bg-neutral-500 disabled:cursor-not-allowed my-2 border-[1px] rounded-xl outline-none focus:border-sky-500 focus:border-2 "
                    rows={4}
                    value={letter}
                    onChange={(e)=>{setLetter(e.target.value)}}
                />
                <div className="flex flex-row gap-4 w-full">
                    <section className="w-[50%] flex flex-col gap-4">
                        <h2>Pricing Plan</h2>
                        <Select
                            onChange={(e) => setPricing((e as any)?.value)}
                            options={pricingOptions}
                            // theme={customTheme}
                            styles={durationStyles}
                            // isSearchable

                            className="w-[80%]"
                            defaultValue={{ value: 'FIXED', label: 'Fixed' }}
                        />
                    </section>

                    <section className="w-[50%] flex flex-col gap-4 ">
                        <h2>Price</h2>
                        <div className="flex flex-row border-2 w-[50%] items-center  rounded-xl focus-within:border-sky-500">
                            <input
                                type="number"
                                className="border-none p-2 w-[70%] outline-none rounded-xl "
                                value={price}
                                onChange={e=>setPrice(parseInt(e.target.value))}
                            />
                            <span className="font-semibold">D.A</span>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )

    const footerContent = (<div></div>)
    const handleSubmit = async ()=>{
        if(!duration || letter.length < 20 || !price || price <100 || !pricing ){
            toast.error('Please Fill Fields Correctly')
            return
        }
        setIsLoading(true)
        const proposal =  await axios.post('/api/proposals/',{jobId:proposalModal.jobId,duration,letter,price,pricing})
        if(proposal){
            toast.success('Proposed successfully')
            proposalModal.onClose()
        }
        else{
            toast.error('An error occured')
        }
        setIsLoading(false)

        // e.preventDefault()

    }
    // console.log(proposalModal)
    return (
        <Modal
            isOpen={proposalModal.isOpen}
            onClose={proposalModal.onClose}
            onSubmit={handleSubmit}
            body={bodyContent}
            footer={footerContent}
            title={"Submit a Proposal"}
            disabled={isLoading}
            actionLabel="Submit"
        />
    )
}

export default ProposalModal
