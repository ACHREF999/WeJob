import React from 'react'
import GigsDetails from './components/GigsDetails'
import ProposeCard from './components/ProposeCard'


type Props = {
  params:{
    gigId:string
  }
}

const Gigs = ({params}: Props) => {
  return (
    <div className="flex flex-row gap-10 w-full">
      <GigsDetails gigId={params.gigId} />
      <ProposeCard gigId={params.gigId}/>
    </div>
  )
}

export default Gigs