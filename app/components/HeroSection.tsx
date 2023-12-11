import Image from "next/image"
import { LiaToggleOnSolid } from 'react-icons/lia'
import HeroSearchBar from './HeroSearchBar'


function HeroSection() {
  return (
      <div className="w-full flex flex-col h-[80vh] relative bg-gradient-to-tl from-[#9D8ACD]/10 to-[#6B50AD]/10">
          {/* content with image */}
          <div className="flex max-lg:flex-col lg:flex-row justify-between px-[5%] relative h-full">
              {/* Content */}
              <div className="pt-16 lg:w-[65%]">
                  <span className="flex flex-row items-center gap-4">
                      <LiaToggleOnSolid size={34} className="text-[#B62FD8]" />
                      <span className="text-lg font-medium">
                          Find Your Dream Job
                      </span>
                  </span>
                  <h1 className="text-[4.5rem] font-bold mb-4cc">
                      Freelance Jobs and Talents at Your Fingertips
                  </h1>
                  <span className="text-gray-700 text-2xl max-w-[50%]">
                      Connect with top freelancers and clients on our platform!
                      find your perfect match for your next project.
                  </span>
                  <div className="mt-6">
                    <Image 
                    src="/images/heroSmallImage.png"
                    alt="holla"
                    width={100}
                    height={50}
                    />
                    <span className="text-xl mt-10">
                      Over <span className="text-sky-500">100+</span> freelancers to complete your projects
                    </span>
                  </div>
              </div>

              {/* Image */}
              <div className="self-end absolute bottom-16 right-16">
                  <Image
                      src="/images/heroImage.png"
                      width={500}
                      height={500}
                      alt="asd"
                  />
              </div>
          </div>

          {/* Search Bar */}
          <HeroSearchBar />
      </div>
  )
}

export default HeroSection