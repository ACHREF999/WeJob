import type { TechnicalSkills } from "@prisma/client";
import Link from 'next/link'
import format from "@/libs/timeFomat";
interface JobCardProps {
    id:string;
    title : string;
    pricing:string;
    price:number;
    date:string;
    description:string;
    technicalSkills:TechnicalSkills[];
    proposals:number;
}

function JobCard({
    id,title,pricing,price,date,description,technicalSkills,proposals
}:JobCardProps) {
  return (
      <Link
          className="flex flex-col gap-6 py-8 border-t-2 border-y-gray-200 px-4 hover:bg-[#c4b8c822] group transition"
          href={`/jobs/${id}`}
      >
          <h1 className="text-xl lg:text-2xl font-semibold">{title}</h1>
          <p className="text-gray-400">
              {pricing} - {price}.DZD - posted  {format(new Date(date))}
          </p>
          <p className="font-medium">{description}</p>
          <div className="flex flex-row gap-6">
              <span className="py-1 px-3 rounded-full bg-gray-200 font-medium text-sm border-transparent border-[1px] group-hover:border-[1px] group-hover:border-gray-300">
                  {technicalSkills[0].category}
              </span>
              {technicalSkills[0].stack?.map((skill) => (
                  <span
                      className="py-1 px-3 rounded-full bg-gray-200 font-medium text-sm border-transparent border-[1px] group-hover:border-[1px] group-hover:border-gray-300"
                      key={title + skill}
                  >
                      {skill}
                  </span>
              ))}
          </div>
          <p>
              <span className="text-gray-400">Proposals : </span> {proposals}
          </p>
      </Link>
  )
}

export default JobCard