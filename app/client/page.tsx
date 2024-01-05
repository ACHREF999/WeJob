import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/libs/auth'
import { redirect } from 'next/navigation'
import SearchBar from './components/SearchBar'
import RecommendedGigs from './components/RecommendedGigs'
import ProfileCard from './components/ProfileCard'

type Props = {}

const ClientHomePage = async (props: Props) => {
    const session = await getServerSession(authOptions)
    if(!session || !session.user || !session.user.userId) redirect('/')
    else{
        if((session.user?.role)==='FREELANCER'){
            redirect('/freelancer')
        }
        }   
    
  return (
    <div className="mt-6 lg:mt-12 flex flex-row w-full justify-between gap-10 items-start">
      
      
      {/* Content */}
      <div className="flex flex-col gap-1 w-[90%] ">
        {/* Welcome Back */}
        <h1 className="text-xl lg:text-2xl font-semibold"> Welcome Back <span className="text-blue-700 font-bold text-2xl lg:text-3xl "> {session?.user?.name}</span> !</h1>
        {/* Carousel  */}
        <div className='w-full mt-8 lg:mt-12 min-h-[25vh] bg-purple-700 rounded -xl text-white text-xl lg:text-2xl font-semibold px-4 py-6'>
          Carousel
        </div>
        {/* search bar */}
        <SearchBar />
        <h1 className='text-xl lg:text-2xl font-semibold pb-2 mb-2 border-b-[1px] w-fit'>Gigs You Might Like</h1>
        <RecommendedGigs />
      </div>
      
      
      {/* Profile Card */}
      <ProfileCard userId={session.user.userId} />
    </div>
  )
}

export default ClientHomePage