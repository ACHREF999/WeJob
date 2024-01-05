import React from 'react'
import Link from 'next/link'


type Props = {
    id:string;
    title:string;
    pricing:string;
    image:string;
    price:number;
    freelancer:{
        image:string;
        firstName:string;
        lastName:string;
        rating:number;
    }
}

const GigCard = ({id,title,pricing,image,price,freelancer}: Props) => {

  return (
    <Link className="w-72 h-[21rem] border-[1px] rounded-xl flex flex-col" href={`/gigs/${id}`}>
        {/* Gig Info */}
        <div className="h-[75%]">
            <img src={image} alt="" className="h-[70%] w-full rounded-t-xl" />
            <h2 className="text-md pl-2 overflow-hidden">{title}</h2>
            <div>
                <p className="text-gray-600 text-sm pl-2">{pricing} - <span className="font-medium text-black">{price}.DA</span></p>
                
            </div>
        </div>
        {/* Freelancer Info */}
        <div className="flex flex-row pt-2 px-2 mt-2 border-t-[1px]">
            
            <img
            src={freelancer?.image || '/images/placeholder.png'}
            className="w-12 h-12 rounded-full"
            />
            <div className='flex flex-col items-start pl-4'>
            <h2 className="text-lg font-medium ">{freelancer?.firstName} {freelancer.lastName}</h2>
            <p>{freelancer?.rating}/5</p>
            </div>


        </div>

    </Link>
  )
}

export default GigCard