'use client'
import React from 'react'
import GigCard from './GigCard'
import useRecommendedGigs from '@/hooks/useRecommendedGigs'
import LoadingComp from '@/components/LoadingComp'

type Props = {}

const RecommendedGigs = (props: Props) => {
  const {data,isLoading,error} = useRecommendedGigs()
  // console.log(data)
  if(error) throw new Error("Failed Fetching Recommended Gigs")
  return (
    <div className="flex flex-row flex-wrap gap-12">
      {isLoading?(<LoadingComp />):(
        data.data.map((gig:any)=>(
          <GigCard 
          key={gig.id}
          id={gig.id}
          title={gig.title}
          pricing={gig.pricing}
          price={gig.price}
          image={gig.image||'/images/placeholder.png'}
          freelancer={gig.freelancer}

          />
        ))
      )}
      {/* <GigCard 
      id="123"
      title="Create NFTs for aspodkopk"
      pricing='FIXED'
      image="/images/placeholder.png"
      price={1000}
      freelancer={{
        image:'/images/placeholder.png',
        name:'Ahmed Samer',
        rating:4.2
      }}
      />
      <GigCard 
      id="123"
      title="Create NFTs for aspodkopk"
      pricing='FIXED'
      image="/images/placeholder.png"
      price={1000}
      freelancer={{
        image:'/images/placeholder.png',
        name:'Ahmed Samer',
        rating:4.2
      }}
      /> */}

    </div>
  )
}

export default RecommendedGigs