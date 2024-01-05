'use client'
// import React from 'react'
import useUser from '@/hooks/useUser';
import Image from 'next/image'
// import { GiSkills } from 'react-icons/gi';
// import Link from 'next/link'
import useEditModal from '@/hooks/useEditModal';
import Loading from '@/components/LoadingComp';
import { CiLocationOn } from "react-icons/ci";
import { FaGithubAlt,FaLinkedin } from "react-icons/fa";
import Link from 'next/link'


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
            editModal.onOpen(userId)
        }
    }
    return (
    <div className="w-[20%]">
    <div  className=" w-full border-gray-200 border-[2px] rounded-xl shadow-sm  flex flex-col gap-6 items-center p-4 py-6 ">
        {/* Profile Image */}
        <div className="h-36 w-36 relative">
        <Image 
        src={visitedUser?.image || '/images/placeholder.png'}
        // width={120}
        // height={120}
        fill
        objectFit='cover'
        alt={"Profile Image"}
        className="rounded-full"
        />
        </div>
        {isLoading?<Loading/>:(<><section className="pb-3 flex flex-col items-center border-gray-200 border-b-[1px] w-[80%]">
            <h1 className="text-xl font-semibold py-1">{visitedUser?(`${visitedUser?.firstName} ${visitedUser.lastName}`):('')}</h1>
            {visitedUser?.skills.map((skill:any) =>(
                <span key={skill.stack} className="text-gray-600">{skill.category.replace("_"," ")}</span>
            ))}
        </section>
        
        
        {visitedUser?.location?(<span className="text-gray-600 flex flex-row items-center justify-center border-b-[1px] border-gray-200 pb-3 w-[80%] text-center ">
            <CiLocationOn size={20}/>
            {visitedUser.location}
        </span>):null}
        {visitedUser?.description?(<span className="text-gray-600 flex flex-row items-center justify-center border-b-[1px] border-gray-200 pb-3 w-[80%] text-center">
            
            {visitedUser.description}
        </span>):null}
        {visitedUser?.githubLink?(
        <Link href={visitedUser.githubLink} target='_blank' className="text-gray-600 flex flex-row justify-center items-center border-b-[1px] border-gray-200 pb-3 w-[80%] text-center">
            <FaGithubAlt size={20}/>
            Github Profile
        </Link>):null}
        {visitedUser?.linkedinLink?(
        <Link href={visitedUser.linkedinLink} target='_blank' className="text-gray-600 flex flex-row justify-center items-center border-b-[1px] border-gray-200 pb-3 w-[80%] text-center">
            <FaLinkedin size={20}/>
            Linkedin Profile
        </Link>):null}
        
        </>)}
        {currentUser?.userId===userId && <button
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