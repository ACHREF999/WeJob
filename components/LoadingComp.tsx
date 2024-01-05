// import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type Props = {
    className?:String
}

const LoadingComp = (props: Props) => {

    return (
    <AiOutlineLoading3Quarters size={34} className={`animate-spin text-gray-400 ${props.className} my-2 mx-2`}/>
    )
}

export default LoadingComp