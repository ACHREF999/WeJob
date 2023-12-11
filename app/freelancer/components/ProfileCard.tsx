import Image from 'next/image'
import Link from 'next/link'

interface ProfileCardProps {
    image?: string
    name: string
}

function ProfileCard({ image, name }: ProfileCardProps) {
    return (
        <div className="flex flex-col items-center justify-center self-start sticky top-0 w-[30%] min-h-[18vh] py-[5%]">
            <div className="rounded-xl shadow-sm flex flex-col items-center justify-center  w-full min-h-[15vh] border-gray-200 border-[1px] py-2 max-h-[380px]">
                <Image
                    src="/images/placeholder.png"
                    alt="Profile Image"
                    width={100}
                    height={100}
                    className="rounded-full"
                />
                <h1 className="text-xl font-semibold underline">{name}</h1>

                <Link
                    href="/profile"
                    className="text-[#8301B1] mt-4 pt-1 pb-2 border-t-[2px] font-semibold "
                >
                    {' '}
                    Customize your profile{' '}
                </Link>
            </div>
            <button className="border-none bg-[#740B99] text-white font-semibold text-lg mt-4 lg:mt-8 py-2 px-4 rounded-full w-full">Create a Gig</button>
        </div>
    )
}

export default ProfileCard
