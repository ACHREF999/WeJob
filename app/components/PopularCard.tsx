import React from 'react'


interface PopularCardProps {
    Icon  : React.ReactElement
    title:string;
}

function PopularCard({Icon,title}:PopularCardProps){


    return (
        <div className="flex flex-row justify-around items-center shadow-md w-72 h-16 border-2 border-gray-200 rounded-sm cursor-default ">
            <Icon size={28} className="bg-[#E4EEFC] rounded-lg"/>
            <span className="text-lg lg:text-xl font-medium"> {title}</span>
            
        </div>
    )

}

export default PopularCard;