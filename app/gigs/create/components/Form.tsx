'use client'
import axios from 'axios'
// import React from 'react'
import {useState} from 'react'
import Select, { GroupBase, SingleValue, ThemeConfig } from 'react-select'
import toast from 'react-hot-toast'
import {useRouter} from 'next/navigation'

type Props = {}

const JobForm = (props: Props) => {
    //hooks
    const router = useRouter()
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [duration ,setDuration] = useState(1)
    const [pricing,setPricing]=useState('FIXED')
    const [price,setPrice] = useState<number|undefined>()
    const [category,setCategory] = useState<string|undefined>()
    const [skills,setSkills] = useState<string[]>([])
    // const [error,setError] = useState(null)

    const pricingOptions = [
        { label: 'Hourly', value: 'HOURLY' },
        {label:'Fixed',value:'FIXED'}
    ]

    const durationOptions = [
        {label:'1 Week',value:1},
        {label:'2 Weeks',value:2},
        {label:'3 Weeks',value:3},   
        {label:'1 month',value:4},
        {label:'6 Weeks',value:6},
        {label:'2 months',value:8},
    ]
    
    const categoryOptions = [
    {label:"Web Development",value:"WEB_DEVELOPMENT"},
    {label:"Mobile Development",value:"MOBILE_DEVELOPMENT"},
    {label:"UI/UX Design",value:"UI_UX_DESIGN"},
    {label:"Project Management",value:"PROJECT_MANAGEMENT"},
    {label:"Video Editing",value:"VIDEO_EDITING"},
    {label:"Artifical Intelligence",value:"ML_MODEL"},
    {label:"Marketing",value:"MARKETING"}
    ]

    console.log(duration)
    
    const skillsOptions = [
        {label:"React",value:"REACT"},
        {label:"HTML",value:"HTML"},
        {label:"CSS",value:"CSS"},
        {label:"Nodejs",value:"NODEJS"},
        {label:"Angular",value:"ANGULAR"},
        {label:"Flask",value:"FLASK"},
        {label:"Python",value:"PYTHON"}
    ]

    const categoryStyles = {
        control: (styles: any) => ({
            ...styles,
            paddingTop: '2px',
            paddingBottom: '2px',
            // borderColor:"#00000000",
            // borderRight:"solid 1px #00000055",
            // borderRadius:"0px",
            // paddingRight:"10px",
            fontSize: '12px',
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: '#0146B1dd',
            fontWeight: 600,
            fontSize: '12px',
            paddingLeft: '6px',
        }),
    }

    
    const customTheme = (theme: any) => {
        return {
            ...theme,
            colors: {
                ...theme.colors,
                primary25: '#E4EEFC',
                // primary: '#0146B1',
                primary: '#01b641',
            },
        }
    }
    const handleSubmit = async (e:any)=>{
        e.preventDefault()
        if(!title || title.length<10 || description.length<100 ||!price || !category || skills.length<2){
            toast.error("Please Fill Fileds Correctly")
            return
        }
        // let employment = duration>=8?'FULLTIME':'PARTTIME'
        const {data:gig} = await axios.post('/api/gigs',{title,description,duration,pricing,price,category,skills})
        console.log(gig)
        if (gig ){
        toast.success('Gig Created Succesfully')
        router.push(`/gigs/${gig.data.id}`)
        }
    }

    return (
        <form className="flex flex-col gap-2 py-8 mx-6 border-r-2" onSubmit={handleSubmit}>
            {/* Title */}
            <div className="flex flex-col gap-2 px-36  border-b-2 py-6">
                <label htmlFor="title" className="text-2xl ">
                    Title :
                </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="outline-none bg-gray-50/50 border-gray-300 border-[1px]  w-[75%] p-2 rounded-lg"
                    placeholder="Job Title"
                />
            </div>

            {/* Description */}
            <div className="flex flex-col px-36 border-b-2 gap-2 py-6">
                <label htmlFor="description" className="text-2xl ">
                    Description :
                </label>
                <textarea
                    rows={6}
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="outline-none bg-gray-50/50 border-gray-300 border-[1px]  w-[75%] p-2 rounded-lg resize-none"
                    placeholder="Enter Description ..."
                />
            </div>

            {/* Price Pricing Duration */}
            <div className="flex flex-col px-36 border-b-2  gap-2 py-2">
                {/* <h1 className="text-2xl font-medium">Price :</h1> */}
                <div className="flex flex-row gap-12 items-start  ">
                    {/* Price */}

                    <div className="flex flex-col gap-2  w-[calc(calc(68%/3)-1.5rem)]">
                        <label htmlFor="price" className="text-md pb-1">
                            Price :
                        </label>
                        <input
                            type="number"
                            max={pricing == 'HOURLY' ? '3000' : '100000'}
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(parseInt(e.target.value))}
                            className="outline-none bg-gray-50/50 border-gray-300 border-[1px] w-full p-2 rounded-lg"
                            placeholder="Price"
                        />
                    </div>
                    {/* Pricing */}
                    <div className=" flex flex-col gap-2  px-2 w-[calc(calc(75%/3)-1.5rem)]">
                        <h3 className="text-md">Pricing :</h3>
                        <div className="w-full min-w-full py-1">
                            <Select
                                onChange={(e: any) => {
                                    setPricing(e.value)
                                }}
                                options={pricingOptions as any}
                                theme={customTheme}
                                styles={categoryStyles}
                                // isSearchable
                                // autoFocus
                                placeholder="Type"
                                className="min-w-full"
                                defaultValue={{
                                    label: 'Fixed',
                                    value: 'FIXED',
                                }}

                                // defaultValue={'TALENT'}
                            />
                        </div>
                    </div>

                    {/* Duration */}
                    <div className=" flex flex-col gap-2 px-2 w-[calc(calc(75%/3)-1.5rem)]">
                        <h3 className="text-md">Duration :</h3>
                        <div className="w-full min-w-full py-1">
                            <Select
                                onChange={(e: any) => {
                                    setDuration(parseInt(e.value))
                                }}
                                options={durationOptions as any}
                                theme={customTheme}
                                styles={categoryStyles}
                                // isSearchable
                                // autoFocus
                                placeholder="Type"
                                className="min-w-full"
                                defaultValue={{
                                    label: '1 Week',
                                    value: 1,
                                }}

                                // defaultValue={'TALENT'}
                            />
                        </div>
                    </div>
                </div>

                <div></div>
            </div>

            {/* Category Skills */}
            <div className="flex flex-col px-36 border-b-2  gap-2 py-2">
                {/* <h1 className="text-2xl font-medium">Price :</h1> */}
                <div className="flex flex-row gap-12 items-start  ">
                    {/* Category */}

                    <div className=" flex flex-col gap-2  px-2 w-[15%]">
                        <h3 className="text-md">Category :</h3>
                        <div className="w-full min-w-full py-1">
                            <Select
                                onChange={(e: any) => {
                                    setCategory(e.value)
                                }}
                                options={categoryOptions as any}
                                theme={customTheme}
                                styles={categoryStyles}
                                // isSearchable
                                // autoFocus
                                placeholder="Type"
                                className="min-w-full"
                                // defaultValue={'TALENT'}
                            />
                        </div>
                    </div>

                    {/* Skills */}
                    <div className=" flex flex-col gap-2 px-2 w-[calc(60%-3rem)]">
                        <h3 className="text-md">Skills :</h3>
                        <div className="w-full min-w-full py-1">
                            <Select
                                placeholder={!category?"Select A category First":"Select skills"}
                                onChange={(e) => {
                                    setSkills((prev) =>
                                        e.map((option) => {
                                            return option.value
                                        })
                                    )
                                }}
                                noOptionsMessage={() => 'Unknown Skill .'}
                                theme={customTheme}
                                isSearchable
                                isMulti
                                className="w-full hide-scrollbar"
                                options={skillsOptions}
                                styles={categoryStyles}
                                isOptionDisabled={() => (skills.length >= 3 || !category)}

                                // defaultValue={'TALENT'}
                            />
                        </div>
                    </div>
                </div>

                
            </div>

            <div className="flex flex-col px-36 border-b-2 py-2">
                <button type="submit" className="border-none text-center bg-[#740B99] text-white font-semibold text-lg py-2 px-4 rounded-xl w-[15%]">
                    Post Job
                </button>

            </div>
        </form>
    )
}

export default JobForm