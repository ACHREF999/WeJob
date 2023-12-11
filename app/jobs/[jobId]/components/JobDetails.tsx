
type Props = {
    id: string,
    title: string,
    date: string,
    description: string,
    pricing: string,
    price: number,
    technicalSkills: {
        category: string
        stack: string[]
    },
    proposals: number,
    client: {
        id: string,
        createdAt: string,
        firstName: string,
        lastName: string,
        jobs: number,
    }
}

export default function JobDetails({id,title,date,description,pricing,price,technicalSkills,proposals,client}: Props) {
  return (
      <div className="flex flex-col gap-8 w-[70%] border-r-[2px] border-gray-200 mr-2 pb-6">
          {/* Title */}
          <section className="border-b-[2px] border-gray-200 py-2 pl-8 pb-8">
              <h1 className="text-2xl font-semibold py-2">{title}</h1>
              <p className="text-gray-500 py-2">posted {date} ago</p>
          </section>

          {/* Description */}
          <section className="py-4 pb-8 text-xl w-full border-b-[2px] border-gray-200 pl-8">
              <p className="w-[60%]">{description}</p>
          </section>

          {/* Pricing */}
          <section className="flex flex-row gap-32 border-b-[2px] border-gray-200 py-2 pb-8 pl-8">
              <div className="flex flex-col gap-2">
                  <span>Price: <span className="text-black font-medium text-lg">{price}</span>.DZD</span>
                  <span className="text-gray-500">{pricing}</span>
              </div>
          </section>

          <section className="flex flex-col gap-4 border-b-[2px] border-gray-200 py-2 pb-8 pl-8">
              <h1 className="text-xl font-semibold py-2">
                  Required Skills and Expertise
              </h1>
              <div className="flex flex-row gap-6 items-center">
                  <span className="py-1 px-3 rounded-full bg-gray-200 font-medium text-sm border-transparent border-[1px] group-hover:border-[1px] group-hover:border-gray-300">
                      {technicalSkills.category}
                  </span>
                  {technicalSkills.stack.map((skill) => (
                      <span
                          className="py-1 px-3 rounded-full bg-gray-200 font-medium text-sm border-transparent border-[1px] group-hover:border-[1px] group-hover:border-gray-300"
                          key={title + skill}
                      >
                          {skill}
                      </span>
                  ))}
              </div>
          </section>

          {/* Activity On this job */}
          <section className="flex flex-col gap-6 border-b-[2px] border-gray-200 py-2 pb-8 pl-8">
              <h1 className="text-xl font-semibold py-2">
                  Activity On This Job
              </h1>
              <div>
                <span className="text-gray-500">Proposals : <span className="text-black font-medium">{proposals}</span></span>
              </div>
             
          </section>
      </div>
  )
}

