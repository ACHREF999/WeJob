import HeroSection from "./components/HeroSection";
import TrustedBy from "./components/TrustedBy";
import JobCarrousel from './components/JobCarrousel'
import TalentsCategories from './components/TalentsCategories'
import Popular from './components/Popular'
import ClientsComments from "./components/ClientsComments";
import Explore from './components/Explore'
import { getServerSession } from "next-auth";
import {authOptions} from '@/libs/auth'
// import { useRouter } from "next/navigation";
import {redirect} from 'next/navigation'

export default async function Home() {
    
    const session =  await getServerSession(authOptions)
    // console.log('This is the session in home page: ',session)
    if(session){
        if((session.user?.role)==='FREELANCER'){
            redirect('/freelancer')
        }
        else{
            redirect('/client')
        }
        
    }
    return (
        <main className="flex flex-col">
            <HeroSection />
            <TrustedBy />
            <JobCarrousel/>
            <TalentsCategories />
            <Popular />
            <ClientsComments />
            <Explore />
        </main>
    )
}
