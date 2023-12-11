'use client'
import Slider from 'react-slick'
// import { FaArrowLeftLong ,FaArrowRightLong  } from "react-icons/fa6";
import {useState,useRef} from 'react'
import { BsArrowLeft,BsArrowRight } from 'react-icons/bs'
import ClientCommentCard from './ClientCommentCard'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ClientsComments() {
     
    const sliderRef = useRef<any>();
    const comments  = [
    {name:"Alice bara",comment:"posdakpj pdassadsa dsajdpaso dppopaod pspaopoaksdk [pkas",image:"/images/placeholder.png"},
    {name:"Jamal kks",comment:"posdakpj pdasjdpaasd sd aasd so dppopaod pspaopoaksdk [pkas",image:"/images/placeholder.png"},
    {name:"Niogii asd",comment:"posdakpj pdas asd asd sad asjdpaso dppopaod pspaopoaksdk [pkas",image:"/images/placeholder.png"},
    {name:"Meeeell sad",comment:"posdakpj pdasjdsad sad sad paso dppopaod pspaopoaksdk [pkas",image:"/images/placeholder.png"},
    
    ]

    const handlePrev = () => {
        if (sliderRef?.current?.slickPrev) {
            sliderRef.current.slickPrev()
            // setCurrentIndex((currentIndex - 1 + jobs.length)%jobs.length)
        }
    }

    const handleNext = () => {
        if (sliderRef?.current?.slickNext) {
            sliderRef.current.slickNext()
            // setCurrentIndex((currentIndex + 1)%jobs.length)
        }
    }

    const SlickArrowLeft = () => (
        null
    )

    const SlickArrowRight = () => (
        null
    )
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SlickArrowLeft />,
        prevArrow: <SlickArrowRight />,
        speed: 550,

        adaptiveHeight:true,
        variableWidth: false,
        responsive:[
            {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }

        ]
        
        
    }
    return (
    <div className="w-full flex flex-col px-[5%] my-8">
        {/* Carousel header */}
        <div className="flex flex-row justify-between ">
            <div className="flex flex-col w-1/2 gap-8">    
                <h1 className="text-2xl lg:text-4xl font-medium">Client's Comments</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora autem enim maiores ipsam velit quos eius. Impedit quos sed facere mollitia possimus odit porro vero voluptatibus itaque ipsum</p>
            </div>
            
            <div>
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
        {/* Carousel */}
        <div className="w-full min-h-[30vh] overflow-hidden block my-6">
        {true && (<Slider ref={sliderRef} {...settings} className="overflow-hidden w-full h-full ">
            {
                comments.map(comment=>(
                    <div className="pr-4 lg:pr-8  min-h-[30vh] " key={comment.name}>
                    <ClientCommentCard {...comment}  />
                    </div>
                ))
            }


        </Slider>)}
        </div>
    </div>
  )
}

export default ClientsComments