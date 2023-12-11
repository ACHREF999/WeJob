import ProfileCard from "./components/ProfileCard"
import SearchBar from './components/SearchBar'
import RecommendedJobs from './components/RecommendedJobs'
import Carousel from './components/Carousel'


function Freelancer() {
  return (
      <div className="w-full flex flex-row justify-around px-[5%]  gap-8">
          
          <div className=" flex flex-col justify-between w-full gap-4 py-[5%]">
            <Carousel />
            {/* Recommendation with the Search Bar */}
            <SearchBar />
            <RecommendedJobs />
          </div>

              {/* Right Side */}
              <ProfileCard name="Mehamlia Youcef" />
      </div>
  )
}

export default Freelancer