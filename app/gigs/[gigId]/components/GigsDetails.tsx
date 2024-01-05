'use client'
import React from 'react'
import useGig from '@/hooks/useGig'
import LoadingComp from '@/components/LoadingComp'

type Props = {
    gigId:string
}

const GigsDetails = ({gigId}: Props) => {
  const {data,error,isLoading} = useGig(gigId)
  if(error) throw new Error('Failed to fetch the gig : '+gigId)
  if(isLoading) return <LoadingComp />
  const gig = data?.data || {}
  return (
    <div className="w-[70%] flex flex-col gap-4">
      <h1 className="text-4xl font-medium">{gig.title}</h1>
      <img src={gig.image||'/images/placeholder.png'}/>
      <h3 className="text-2xl">Project Details : </h3>
      <p className="text-md">{gig.description}</p>
    </div>
  )
}

export default GigsDetails