'use client'
// import React from 'react'
import useUser from '@/hooks/useUser';
import Image from 'next/image'
// import { GiSkills } from 'react-icons/gi';
// import Link from 'next/link'
import useEditModal from '@/hooks/useEditModal';
import Loading from '@/components/LoadingComp';




type Props = {
    userId:string
    currentUser:any
}

const ProfileCard = ({userId,currentUser}: Props) => {
    const {data,error,isLoading,mutate} = useUser(userId)
    let visitedUser = data?.data
    console.log(visitedUser)
    const editModal = useEditModal()
    // it kept yelling on the event type so i just switched to `any`
    const handleEdit = (e:any)=>{
        if(!isLoading){
            editModal.onOpen()
        }
    }
    return (
    <div className="w-[20%]">
    <div  className=" w-full border-gray-200 border-[2px] rounded-xl shadow-sm  flex flex-col gap-6 items-center p-4 py-6">
        {/* Profile Image */}
        <div className="">
        <Image 
        src={visitedUser?.image || '/images/placeholder.png'}
        width={120}
        height={120}
        alt={"Profile Image"}
        className="rounded-full"
        />
        </div>
        {isLoading?<Loading/>:(<><section className="pb-3 flex flex-col items-center border-gray-200 border-b-[1px] w-[80%]">
            <h1 className="text-3xl font-semibold py-1">{visitedUser?(`${visitedUser?.firstName} ${visitedUser.lastName}`):('')}</h1>
            {visitedUser?.skills.map((skill:any) =>(
                <span key={skill.stack} className="text-gray-600">{skill.category.replace("_"," ")}</span>
            ))}
        </section>
        <span className="text-gray-600 flex flex-col items-center border-b-[1px] border-gray-200 pb-3 w-[80%] text-center">
            GiLocation
        </span></>)}
        {currentUser?.user===userId && <button
        onClick={handleEdit}
        className="text-purple-800 font-semibold text-xl">
        Edit Profile
        </button>}
    </div>
    {currentUser?.userId===userId && <button className="border-none bg-[#740B99] text-white font-semibold text-lg mt-4 lg:mt-8 py-2 px-4 rounded-full w-full">Create a Gig</button>}
    </div>
    )
}

export default ProfileCard