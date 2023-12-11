import HeroSection from "./components/HeroSection";
import TrustedBy from "./components/TrustedBy";
import JobCarrousel from './components/JobCarrousel'
import TalentsCategories from './components/TalentsCategories'
import Popular from './components/Popular'
import ClientsComments from "./components/ClientsComments";
import Explore from './components/Explore'


export default function Home() {
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
