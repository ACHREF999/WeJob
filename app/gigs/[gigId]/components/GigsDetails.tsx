'use client'
import React from 'react'
import useGig from '@/hooks/useGig'
import LoadingComp from '@/components/LoadingComp'
import Image  from 'next/image';
import Link from 'next/link'
import format from '@/libs/timeFomat';


type Props = {
    gigId:string
}

const GigsDetails = ({gigId}: Props) => {
  const {data:gig,error,isLoading} = useGig(gigId)
  if(error) throw new Error('Failed to fetch the gig : '+gigId)
  if(isLoading) return (<div className="w-[70%] min-w-[70%] flex flex-col gap-4 pt-16 p-24">
    <LoadingComp />
  </div>)
  
  console.log(gig)
  return (
      <div className="w-[70%] min-w-[70%] flex flex-col gap-4 pl-8">
          {/* image */}
          <h1 className="text-4xl font-medium pb-2">{gig.data.title}</h1>

          {/* image */}
          <div className="max-w-[90%] justify-self-start h-[70vh] py-4 relative">
              <Image
                  src={gig.data.image || '/images/placeholder.png'}
                  alt="gig image"
                  fill
                  className="rounded-md"
              />
          </div>

          {/* description */}
          <div className="w-[90%] py-4">
              <h3 className="text-2xl pb-2">Project Details : </h3>
              <p className="text-md">{gig.data.description}</p>
          </div>

          {/* whats included */}
          <div className="my-8">
              <h3 className="text-xl">What&apos;s included : </h3>
              <div className="rounded-xl border-[2px] w-[90%] flex flex-col my-4">
                  <div className="w-full py-8 px-8 flex flex-row justify-between border-b-[2px] bg-[]">
                      <h3 className="text-xl font-medium">Pricing : </h3>
                      {isLoading ? (
                          <LoadingComp />
                      ) : (
                          <h3 className="text-xl pr-8">
                              {gig.data.pricing} : {gig.data.price}
                              <span className="text-xs">.DZD</span>
                          </h3>
                      )}
                  </div>
                  <div className="w-full py-8 px-8 flex flex-row  justify-between border-b-[2px] bg-[#F2F5F2]">
                      <h3 className="text-xl font-medium">Delivery Time : </h3>
                      {isLoading ? (
                          <LoadingComp />
                      ) : (
                          <h3 className="text-xl pr-8">
                              after {gig.data.duration} week
                              {gig.data.duration > 1 ? 's' : ''}
                          </h3>
                      )}
                  </div>
                  <div className="w-full py-8 px-8 flex flex-row  justify-between ">
                      <h3 className="text-xl font-medium">
                          Optional add-ons :{' '}
                      </h3>
                      {isLoading ? (
                          <LoadingComp />
                      ) : (
                          <h3 className="text-xl pr-8">
                              Accept add-ons when discussed
                          </h3>
                      )}
                  </div>
              </div>
          </div>

          {/* freelancer */}
          <div className="flex flex-col w-[90%] gap-4">
              <h1 className="text-xl">
                  About{' '}
                  <span className="font-medium text-purple-500">
                      {gig.data.freelancer.firstName}{' '}
                      {gig.data.freelancer.lastName}
                  </span>{' '}
                  :{' '}
              </h1>
              <Link
                  href={`/profile/${gig.data.freelancer.id}`}
                  className="py-2 rounded-lg border-[1px] border-gray-50 flex flex-row gap-6 pl-6 hover:bg-[#f1f5f1]/80 transition-all"
              >
                  {/* image */}
                  <div className="w-[12%] rounded-full relative h-full p-1 ">
                      <Image
                          src={
                              gig.data.freelancer.image ||
                              '/images/placeholder.png'
                          }
                          alt="freelancer image"
                          fill
                          objectFit="contain"
                          className="rounded-full"
                      />
                  </div>

                  <div className="flex flex-col gap-2 pt-4">
                      <h1 className=" text-2xl font-medium text-purple-500">
                          {gig.data.freelancer.firstName}{' '}
                          {gig.data.freelancer.lastName}
                      </h1>
                      <p className="text-lg text-gray-500">
                          Joined{' '}
                          {format(new Date(gig.data.freelancer.createdAt))}
                      </p>
                      <p className="text-lg text-gray-500">
                          Posted {gig.data.freelancer._count.createdGigs} gig
                          {gig.data.freelancer._count.createdGigs > 1
                              ? 's'
                              : ''}
                      </p>
                  </div>
              </Link>
          </div>

          {/* Reviews */}
          <div className="flex flex-col w-[90%] gap-4 border-b-[2px] py-4">
              <h3 className="text-2xl pb-2">Reviews : </h3>
              <div>{gig?.data?.reviews? gig.data.reviews.map(((review:any)=>(<></>))) : (<p className="text-lg text-gray-500">No Reviews Yet</p>)}</div>
          </div>
      </div>
  )
}

export default GigsDetails