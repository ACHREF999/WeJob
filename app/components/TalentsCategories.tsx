import TalentCard from './TalentCard'

function TalentsCategories() {

    const talents = [
        {
            title:"Development & IT",
            talents:157,
            jobs:113
        },
        {
            title:"UI/UX Design",
            talents:77,
            jobs:106
        },
        {
            title:"Marketing & Sales",
            talents:47,
            jobs:33
        },
        {
            title:"Photography & Editing",
            talents:68,
            jobs:42
        },
        {
            title:"Management",
            talents:23,
            jobs:36
        },
    ]

    return (
        <div className="w-full px-[5%] bg-[#FAF3F9] text-2xl lg:text-3xl font-semibold py-24 my-8">
            <h1>Browse Talent By Category</h1>
            <div className="flex flex-row flex-wrap">
            {talents.map(talent=>(<TalentCard {...talent} key={talent.title} />))}
            </div>
        </div>
    )
}

export default TalentsCategories