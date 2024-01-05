'use client'
import React from 'react'

type Props = {
    userId:string
    currentUser:any
}

const Stats = ({userId,currentUser}: Props) => {
  return (
    <div className="py-2 pb-8 border-b-gray-300 border-b-[2px]">
        <h1 className="text-2xl font-semibold">Your Stats</h1>
        <div className="flex flex-row  font-semibold my-4 w-full gap-[10%] ">
            {/* simple cards  */}
            <div className="flex flex-col rounded-xl bg-purple-600 text-white text-2xl py-4 px-8 w-[40%]">
                <span className="text-gray-300 text-lg">Active Tasks</span>
                Active Jobs - {2}
                <span className="text-gray-300 text-lg">find more jobs</span>
            </div>
            <div className="flex flex-col rounded-xl bg-purple-600 text-white text-2xl py-4 px-8 w-[40%]">
                <span className="text-gray-300 text-lg">Completed Tasks</span>
                Completed Jobs - {2}
                <span className="text-gray-300 text-lg">find more jobs</span>
            </div>



        </div>
    </div>
  )
}

export default Stats