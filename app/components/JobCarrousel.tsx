'use client'
import Slider from "react-slick"
import {useCallback, useState,useRef,useEffect} from 'react'
// import { FaArrowLeftLong ,FaArrowRightLong  } from "react-icons/fa6";
import { BsArrowLeft,BsArrowRight } from 'react-icons/bs'
// import useRecommendedJobs from "@/hooks/useRecommendedJobs"
import JobCard from "./JobCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function JobCarrousel() {
    
    const [selectedCategory , setSelectedCategory] =useState<"DESIGN"|"DEVELOPMENT"|"PROJECT_MANAGEMENT"|"VIDEO_EDITING"|"MARKETING"|null>("DESIGN")
    const jobs = [
    {
        title: 'Product Designer',
        employment: 'Full Time',
        pricing: 'Hourly',
        price: 35,
        date: '12/12/2023',
        client: {
            name: 'Hotjar',
            image: '/images/placeholder.png',
            jobsCount: 20,
        },
    },
    {
        title: 'Product Designer',
        employment: 'Full Time',
        pricing: 'Hourly',
        price: 35,
        date: '12/12/2023',
        client: {
            name: 'Hotjar',
            image: '/images/placeholder.png',
            jobsCount: 20,
        },
    },
    {
        title: 'Product Designer',
        employment: 'Full Time',
        pricing: 'Hourly',
        price: 35,
        date: '12/12/2023',
        client: {
            name: 'Hotjar',
            image: '/images/placeholder.png',
            jobsCount: 20,
        },
    },
    {
        title: 'Backend Engineer',
        employment: 'Part Time',
        pricing: 'Fixed',
        price: 4200,
        date: '02/12/2023',
        client: {
            name: 'GitLab',
            image: '/images/placeholder.png',
            jobsCount: 40,
        },
    },
]
    const [currentIndex,setCurrentIndex]  = useState(0)
    const [isLoading , setIsLoading] = useState(false)
    const sliderRef = useRef();
    
    // useEffect(()=>{
    //         (async ()=>{
    //             setIsLoading(true)
    //         const res = await fetch('http://localhost:3001/api/request/list/', { method: 'GET' })
    //         const jobs = await res.json()
    //         return jobs})().then(data =>{
    //             console.log(data)
    //             setIsLoading(false)
    //             setJobs(data)})

    // },[])

    const categories:string[][] = [["DEVELOPMENT","#5AFEF4"],["DESIGN","#FDC0AE"],["PROJECT_MANAGEMENT","#A7C3B0"],["VIDEO_EDITING","#00A79D"],["MARKETING","#FEA7D5"]]



    // const [isLoading,setIsLoading] = useState(false)

    const handlePrev = ()=>{
        if(sliderRef?.current?.slickPrev) 
        {
            sliderRef.current.slickPrev();
            // setCurrentIndex((currentIndex - 1 + jobs.length)%jobs.length)
        }

        
    }
    
    const handleNext = ()=>{
        if(sliderRef?.current?.slickNext) 
        {
            sliderRef.current.slickNext();
            // setCurrentIndex((currentIndex + 1)%jobs.length)
        }
    }

    const handleCategoryChange = useCallback((e)=>{
        // setIsLoading(true)
        setSelectedCategory(e.target.value)


        // setIsLoading(false)
    },[])



const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    null
)

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => ( null
    // <button
    //     {...props}
    //     className={
    //         'slick-next slick-arrow hidden' +
    //         (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
    //     }
    //     aria-hidden="true"
    //     aria-disabled={currentSlide === slideCount - 1 ? true : false}
    //     type="button"
    // >
    //     Next
    // </button>
)
    const sliderSettings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SlickArrowLeft />,
        prevArrow: <SlickArrowRight />,
        speed: 450,
        variableWidth:true,
        beforeChange: (current, next) => {
            setCurrentIndex(next)
        },
    }
    return (
    <div className="flex flex-col w-full h-full px-[5%] my-6 relative">
        {/* Jobs Header */}
        <div className="w-full flex flex-row justify-between items-center">

            <h1 className="text-2xl lg:text-3xl font-semibold  w-[80%] my-6">
                <span className="text-blue-600">Latest</span> Job Opportunities
            </h1>

            <div className="flex flex-row gap-2">
                <button className="bg-white rounded-full border-[1px] mx-2 p-3" onClick={handlePrev}>
                    <BsArrowLeft className="  text-black" size={32}/>
                </button>
                <button className="bg-black rounded-full border-[1px] mx-2 p-3" onClick={handleNext}>
                    <BsArrowRight   
                    className="text-white rounded-full"
                    size={32}/>
                </button>
            </div>
        </div>

        {/* Select W/ Carousel */}
        <div className="flex flex-row w-full  ">
            {/* Select */}
            <div className="flex flex-col min-w-[35%] lg:min-w-[40%] items-start">
                {categories.map((category)=>(
                    <button key={category[0]} value={category[0]} onClick={handleCategoryChange} 
                    className={`py-3 px-6 text-xl lg:text-2xl text-gray-600 border-l-2 border-l-gray-200 font-regular ${selectedCategory===category[0]?" text-sky-700 font-medium border-l-3 border-l-sky-700 ":""}`}>
                        {category[0]}
                        <span onClick={(e)=>e.stopPropagation()} className={`ml-6 rounded-md text-lg   text-orange-800 p-2`} style={{backgroundColor:category[1]}}>20</span>
                    </button>
                ))}

            </div>




            {/* carousel */}
            {isLoading ? <>Loading ...</>:(
            <div className="overflow-hidden  max-h-[260px] lg:max-h-full px-4 py-6">
            {isLoading 
            ?
            null
            :
            (<Slider {...sliderSettings} ref={sliderRef} className="h-full w-full transition">
                {jobs.map((job,index)=>(
                    
                    <JobCard {...job} key={job.title} active={index===currentIndex}/>
                   
                ))}
            </Slider>)}
            </div>)}

        </div>



    </div>
  )
}

export default JobCarrousel