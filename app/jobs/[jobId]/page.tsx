import JobDetails from './components/JobDetails'
import ClientDetails from './components/ClientDetails'
import { authOptions } from '@/libs/auth'
import { getServerSession } from 'next-auth';



type Props = {
    params:{
        jobId:string
    }
}

export default async function JobDetailsPage({params:{jobId}}: Props) {
    
    // let fetchedData =  {
    //     id:jobId,
    //     title:"Assessment of the UI and UX of the site",
    //     date:"10/12/2023",
    //     description:"An assessment of the site's usability and design is required.\nWhat to expect during the survey:\n- Fill out a short questionnaire about yourself.- Follow the script (go to the site and explore it).\n- Share your thoughts on the usability of the site.\nIt will take you about 30 minutes",
    //     pricing:"HOURLY",
    //     price:3500,
    //     technicalSkills: {
    //             category: 'WEB_DEVELOPMENT',
    //             stack: ['REACT', 'DJANGO', 'FLASK'],
    //     },
    //     proposals:10,
    //     client:{
    //         id:"asdsad",
    //         createdAt:"10/11/2023",
    //         firstName:"Bilal",
    //         lastName:"Chatbi",
    //         jobs:23,

    //     }
    // }
    
    const session = await getServerSession(authOptions)
    return (
        <div className="flex flex-row w-full gap-8 mt-20">
            {/* Details */}
            <JobDetails jobId={jobId} />

            {/* Apply Section */}
            <ClientDetails 
                jobId={jobId}
                session={session}
            />
        </div>
    )
}