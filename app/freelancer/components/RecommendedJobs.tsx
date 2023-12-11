import {useState } from 'react'
import JobCard from './JobCard'

interface JobCardProps {
    title: string
    pricing: string
    price: number
    date: string
    description: string
    technicalSkills: TechnicalSkills
    proposals: number
}

async function RecommendedJobs() {

    const recommendedJobs= [
        {
            id:"asdkpasodk",
            title: 'UI/UX Web Design',
            pricing: 'FIXED',
            price: 3500,
            date: '12/12/2023',
            description:
                'This milestone is the first of many ! Hai, For my user centred web app / website which is also mobile friendly, I am looking for a UI / UX specialist to help me and my frontend developer to design the UI / UX. We have a large set of custom icons and many customisation options like font size correction, menu lepft, right, top and split screen. Who can help us with the design including colouring, buttons and UI / UX flow? Greetings, Otto',
            technicalSkills: {
                category: 'WEB_DEVELOPMENT',
                stack: ['REACT', 'DJANGO', 'FLASK'],
            },
            proposals: 5,
        },
        {
                      id:"asdkpasodk",
            title: 'UI/UX Web Design',
            pricing: 'FIXED',
            price: 3500,
            date: '12/12/2023',
            description:
                'This milestone is the first of many ! Hai, For my user centred web app / website which is also mobile friendly, I am looking for a UI / UX specialist to help me and my frontend developer to design the UI / UX. We have a large set of custom icons and many customisation options like font size correction, menu lepft, right, top and split screen. Who can help us with the design including colouring, buttons and UI / UX flow? Greetings, Otto',
            technicalSkills: {
                category: 'WEB_DEVELOPMENT',
                stack: ['REACT', 'DJANGO', 'FLASK'],
            },
            proposals: 5,
        },
        {
                      id:"asdkpasodk",
            title: 'UI/UX Web Design',
            pricing: 'FIXED',
            price: 3500,
            date: '12/12/2023',
            description:
                'This milestone is the first of many ! Hai, For my user centred web app / website which is also mobile friendly, I am looking for a UI / UX specialist to help me and my frontend developer to design the UI / UX. We have a large set of custom icons and many customisation options like font size correction, menu lepft, right, top and split screen. Who can help us with the design including colouring, buttons and UI / UX flow? Greetings, Otto',
            technicalSkills: {
                category: 'WEB_DEVELOPMENT',
                stack: ['REACT', 'DJANGO', 'FLASK'],
            },
            proposals: 5,
        },
    ]

    return (
    <div className="min-h-[20vh] rounded-xl border-[2px] flex flex-col p-4">
      <h1 className="text-2xl font-bold text-black pl-4">Jobs you might like</h1>
      <div className="flex flex-col w-full">
        <div className="w-full flex flex-row gap-8 border-b-[2px] p-0 pl-4 mt-4 pt-4 font-semibold">
          <button className="text-[#450478] border-b-[#450478] border-b-[4px] ">Best Matches</button>
          <button className="text-gray-600">Most Recent</button>
        </div>
        <p className="px-4 pt-4 my-4 text-2xl ">
          Browse jobs that match your experience to a client&apos;s hiring preferences. Ordered by most relevant.
        </p>
        {recommendedJobs?.length?(
          recommendedJobs.map(job=>(
            <JobCard 
            {...job}
            key={job.title+job.date}
            />
          ))):(<p className="px-4">No Jobs Found</p>)
        }

      </div>

    </div>
  )
}

export default RecommendedJobs