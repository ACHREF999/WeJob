'use client'
import { GrFavorite } from 'react-icons/gr'
import Link from 'next/link'
import useProposalModal from '@/hooks/useProposalModal'
import {useState} from 'react';
import useJob from '@/hooks/useJob';
import LoadingComp from '@/components/LoadingComp'
import { useSession } from 'next-auth/react';
import format from '@/libs/timeFomat';
import useProposalJob from '@/hooks/useProposalJob';


type Props = {
    jobId:string
    client: {
        
            id: string
            createdAt: string
            firstName: string
            lastName: string
            jobs: number
        
    }
}

export default function ClientDetails({jobId,session}: {jobId:string,session:any}) {

    const proposalModal = useProposalModal()
    const [disabled,setDisabled] = useState(false)
    const {data,isLoading,error} = useJob(jobId)
    // const {data:session,status} = useSession()
    const {title,createdAt:date,description,price,pricing,skills,proposals,client} = data?.data||{}
    const {data:proposal,error:proposalError,isLoading:proposalIsLoading} = useProposalJob(jobId)
    const handleClick = (e:any)=>{
        e.preventDefault()
        // if(disabled) return
        // console.log(proposalModal)
        proposalModal.onOpen(jobId)
        // console.log('executed')
    }
    // console.log(proposal.data[0])
    if(isLoading) return <LoadingComp />
    return (
        <div className="flex flex-col gap-6 items-start pl-2 w-[20%] pt-4">
            
            {(session?.user?.role=='FREELANCER' && !(proposal?.data[0]?.id))?(
            <>
            <button className="text-xl font-semibold w-full rounded-full bg-[#740B99] text-white py-2" onClick={handleClick}>
                Apply Now
            </button>

            <button className="text-xl font-semibold flex flex-row gap-4 items-center justify-center w-full border-2 border-[#740B99] text-[#740B99] rounded-full py-2">
                <GrFavorite size={20} />
                Save Job
            </button>
            </>):proposal?.data[0]?.id?
            (<>
                <Link href={""} className="text-xl font-semibold w-full rounded-full bg-[#740B99] text-white py-2" onClick={handleClick}>
                Go To Discussion
            </Link>
            </>):null}

            <h1 className="text-2xl font-semibold py-2">About the Client</h1>
            <Link
                className="flex flex-row gap-6 -ml-4 pl-4 items-center py-3 rounded-xl hover:bg-[#c4b8c80f] group transition w-[80%]"
                href={`/profile/${client?.id}`}
            >
                {/*eslint-disable-next-line @next/next/no-img-element*/}
                <img
                    src="/images/placeholder.png"
                    className="w-12 h-12 rounded-full"
                    alt="Profile Image"
                />
                <span className="text-lg font-medium">
                    {client?.firstName} {client?.lastName}
                </span>
            </Link>
            <p className="text-gray-500">
                Joined {' '}
                <span className="text-black text-lg font-medium">
                    {format(new Date(client?.createdAt))}
                </span>
            </p>
            <p className="text-gray-500">
                <span className="font-medium text-black text-lg">
                    {client?.jobs?.length || 1}
                </span>{' '}
                Jobs Posted
            </p>
                {(client.id==session?.user?.userId) ?(
                <button className="border-none text-center bg-[#740B99] text-white font-semibold text-lg py-2 px-4 rounded-xl ">
                Edit Job
            </button>):null}
        </div>
    )
}