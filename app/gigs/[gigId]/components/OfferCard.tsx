'use client'
import React from 'react'
import useGig from '@/hooks/useGig'
import LoadingComp from '@/components/LoadingComp'
import useOfferModal from '@/hooks/useOfferModal'
import { GrFavorite } from 'react-icons/gr'
import useOfferGig from '@/hooks/useOfferGig'
import Link from 'next/link'



type Props = {
    gigId: string
    session: any
}

const OfferCard = ({ gigId, session }: Props) => {
    const offerModal = useOfferModal()
    const { data: gig, error, isLoading } = useGig(gigId)
    const {data:offer,error:gigError,isLoading:offerIsLoading} = useOfferGig(gigId)
    console.log(offer)
    if (error ) throw new Error('Failed to fetch gig with id : ' + gigId)
    if (gigError ) throw new Error('Failed to fetch gig Offer with id : ' + gigId)
    if (isLoading || offerIsLoading)
        return (
            <div className="w-[20%] border-[2px] shadow-sm rounded-xl h-72 p-12 mt-6">
                <LoadingComp />
            </div>
        )
    const handleClick = (e: any) => {
        e.preventDefault()
        offerModal.onOpen(gigId)
    }
    return (
        <div className="w-[25%] border-[2px] shadow-sm flex flex-col gap-4 rounded-xl h-fit pb-4 mt-[4.15rem]">
            <div className="w-full">
                <div className=" w-full flex flex-col ">
                    <div className="w-full py-6 px-2 flex flex-row justify-between border-b-[2px] bg-[]">
                        <h3 className="text-lg font-medium">Pricing : </h3>
                        {isLoading ? (
                            <LoadingComp />
                        ) : (
                            <h3 className="text-lg">
                                {gig.data.pricing} : {gig.data.price}
                                <span className="text-xs">.DZD</span>
                            </h3>
                        )}
                    </div>
                    <div className="w-full py-6 px-2 flex flex-row  justify-between border-b-[2px] bg-[#F2F5F2]">
                        <h3 className="text-lg font-medium">
                            Delivery Time :{' '}
                        </h3>
                        {isLoading ? (
                            <LoadingComp />
                        ) : (
                            <h3 className="text-lg ">
                                after {gig.data.duration} week
                                {gig.data.duration > 1 ? 's' : ''}
                            </h3>
                        )}
                    </div>
                    <div className="w-full py-6 px-2 flex flex-row  justify-between ">
                        <h3 className="text-lg font-medium">
                            Optional add-ons :{' '}
                        </h3>
                        {isLoading ? (
                            <LoadingComp />
                        ) : (
                            <h3 className="text-lg ">
                                Accept add-ons when discussed
                            </h3>
                        )}
                    </div>
                </div>
            </div>

            {session?.user?.role == 'CLIENT' &&
            session?.user?.userId != gig.data.freelancer.id ? (
                offer?.data[0]?.id ? (
                    <Link
                        className="text-xl font-semibold w-[90%] flex flex-col items-center  rounded-full bg-[#740B99] text-white py-2 mx-auto "
                        // onClick={handleClick}
                        href={`/offers/${offer.data.id}`}
                    >
                        Go To Your Offer
                    </Link>
                ) : (
                    <>
                        <button
                            className="text-xl font-semibold w-[90%] rounded-full bg-[#740B99] text-white py-2 mx-auto "
                            onClick={handleClick}
                        >
                            Make an Offer
                        </button>

                        <button className="text-xl font-semibold flex flex-row gap-4 items-center justify-center w-[90%] border-2 border-[#740B99] text-[#740B99] rounded-full py-2 mx-auto">
                            <GrFavorite size={20} />
                            Save Gig
                        </button>
                    </>
                )
            ) : null}
        </div>
    )
}

export default OfferCard
