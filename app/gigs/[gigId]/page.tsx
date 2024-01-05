import React from 'react'
import GigsDetails from './components/GigsDetails'
import OfferCard from './components/OfferCard'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/libs/auth'


type Props = {
  params:{
    gigId:string
  }
}

const Gigs = async ({params}: Props) => {
  const session = await getServerSession(authOptions)
  return (
    <div className="flex flex-row gap-10 w-full mt-14 relative">
      <GigsDetails gigId={params.gigId} />
      <OfferCard gigId={params.gigId} session={session}/>
    </div>
  )
}

export default Gigs