import ProfileCard from "./components/ProfileCard"
import SearchBar from './components/SearchBar'
import RecommendedJobs from './components/RecommendedJobs'
import Carousel from './components/Carousel'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/libs/auth'
import { redirect } from 'next/navigation'

async function FreelancerHomepage() {
  const session = await getServerSession(authOptions)
  if(!session) redirect('/')
  else{
    if((session.user?.role)==='CLIENT'){
        redirect('/client')
    }
  }
  
  return (
      <div className="w-full flex flex-row justify-around px-[5%]  gap-8">
          
          <div className=" flex flex-col justify-between w-full gap-4 py-[5%]">
            <Carousel />
            {/* Recommendation with the Search Bar */}
            <SearchBar />
            <RecommendedJobs userId={session.user?.userId as string} />
          </div>

              {/* Right Side */}
              <ProfileCard name={`${session.user?.firstName}`} userId={session.user?.userId as string} />
      </div>
  )
}

export default FreelancerHomepage