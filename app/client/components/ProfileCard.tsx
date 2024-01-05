'use client'
import LoadingComp from '@/components/LoadingComp'
import useUser from '@/hooks/useUser'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineModeEdit } from "react-icons/md";

interface ProfileCardProps {

    userId:string
}

function ProfileCard({ userId}: ProfileCardProps) {
    const {data,error,isLoading}= useUser(userId)
    // console.log(data)
    
    return (
        <div className="flex flex-col items-center justify-center self-start sticky top-0 w-[20%] min-h-[18vh] py-[5%]">
            <div className="rounded-xl shadow-sm flex flex-col items-center justify-center  w-full min-h-[15vh] border-gray-200 border-[1px] py-2 max-h-[380px]">
                {isLoading?(<LoadingComp/>):(<><Image
                    src={data?.data.image || "/images/placeholder.png"}
                    alt="Profile Image"
                    width={100}
                    height={100}
                    className="rounded-full"
                />
                <h1 className="text-xl font-semibold underline">{`${data?.data.firstName || ''} ${data?.data.lastName|| ''}`}</h1>

                <Link
                    href={`/profile/${userId}`}
                    className="text-[#8301B1] mt-4 pt-1 pb-2 border-t-[2px] font-semibold flex flex-row gap-1 items-center "
                >
                    {' '}
                    <MdOutlineModeEdit size={22} />
                    Customize your profile{' '}
                </Link></>)}
            </div>
            <Link href="/jobs/create" className="border-none text-center bg-[#740B99] text-white font-semibold text-lg mt-4 lg:mt-8 py-2 px-4 rounded-full w-full">Create a Job</Link>
        </div>
    )
}

export default ProfileCard
