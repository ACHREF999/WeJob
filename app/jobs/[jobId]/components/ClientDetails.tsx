'use client'
import { GrFavorite } from 'react-icons/gr'
import Link from 'next/link'
import useProposalModal from '@/hooks/useProposalModal'
import {useState} from 'react';


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

export default function ClientDetails({jobId,client}: Props) {

    const proposalModal = useProposalModal()
    const [disabled,setDisabled] = useState(false)

    const handleClick = ()=>{
        // if(disabled) return
        console.log(proposalModal)
        proposalModal.onOpen(jobId)
    }
  return (
      <div className="flex flex-col gap-6 items-start pl-2 w-[20%] pt-4">
          <button className="text-xl font-semibold w-full rounded-full bg-[#740B99] text-white py-2" onClick={handleClick}>
              Apply Now
          </button>

          <button className="text-xl font-semibold flex flex-row gap-4 items-center justify-center w-full border-2 border-[#740B99] text-[#740B99] rounded-full py-2">
              <GrFavorite size={20} />
              Save Job
          </button>

          <h1 className="text-2xl font-semibold py-2">About the Client</h1>
          <Link
              className="flex flex-row gap-6 -ml-4 pl-4 items-center py-3 rounded-xl hover:bg-[#c4b8c80f] group transition w-[80%]"
              href={`/profile/${client.id}`}
          >
              {/*eslint-disable-next-line @next/next/no-img-element*/}
              <img
                  src="/images/placeholder.png"
                  className="w-12 h-12 rounded-full"
                  alt="Profile Image"
              />
              <span className="text-lg font-medium">
                  {client.firstName} {client.lastName}
              </span>
          </Link>
          <p className="text-gray-500">
              Member since{' '}
              <span className="text-black text-lg font-medium">
                  {client.createdAt}
              </span>
          </p>
          <p className="text-gray-500">
              <span className="font-medium text-black text-lg">
                  {client.jobs}
              </span>{' '}
              Jobs Posted
          </p>
      </div>
  )
}