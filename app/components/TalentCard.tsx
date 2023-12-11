import { FaShuttleSpace } from 'react-icons/fa6'
import { MdWork } from 'react-icons/md'

interface TalentCardProps {
    title: string
    talents: number
    jobs: number
}

function TalentCard({ title, talents, jobs }: TalentCardProps) {
    return (
        <div className="flex flex-col shadow-md p-6 pt-12 w-[400px] h-[220px] mr-6 mt-16 bg-white">
            <h1 className="text-xl lg:text-2xl font-medium">{title}</h1>
            <div className="flex flex-row w-full justify-between text-md lg:text-lg font-light pt-8">
                <span className="flex flex-row items-center">
                    <FaShuttleSpace size={26} className="text-[#0146B1] mr-2"/>
                    {talents} Talents
                </span>
                <span className="flex flex-row items-center">
                    <MdWork size={26} className="text-[#0146B1] mr-2"/>
                    {jobs} Jobs
                </span>

            </div>
        </div>
    )
}

export default TalentCard
