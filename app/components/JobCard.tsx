interface Client {
    name:string,
    image?:string;
    jobsCount:number
}
interface JobCardProps {

    active?:boolean;
    title:string;
    employment:string;
    pricing:string;
    price:number;
    date:string,
    client:Client

}

function JobCard({

    title,employment,pricing,price,active,date,client

}:JobCardProps){


    return (
        <div
            className={`w-[300px] flex flex-col justify-between h-[220px] mr-8 rounded-xl p-2 px-4 ${
                active
                    ? 'bg-gradient-to-tl from-[#299DF2bb] via-blue-500 to-[#0038F0] text-white '
                    : 'bg-[#E4EEFC] '
            } transition`}
        >
            {/* Job info */}
            <div className="relative flex flex-col h-[65%] justify-between">
                <div className="flex flex-col">
                    <h1 className="text-lg lg:text-xl font-medium ">{title}</h1>

                    <span
                        className={`rounded-xl p-1 px-4 my-1 w-fit ${
                            active
                                ? ' bg-[#0146B1] text-white'
                                : ' bg-[#BBD3F8] text-black '
                        }`}
                    >
                        {employment}
                    </span>
                </div>
                <span className="text-lg lg:text-xl font-light ">
                    {pricing} - {price}${pricing === 'Hourly' ? '/h' : ''}
                </span>
            </div>

            {/* Client info */}
            <div className="w-full flex flex-row justify-between border-t-white border-t-[1px] h-[30%]  font-medium items-center relative">
                <div>

                <span className="">{client.name}</span>
                 </div> 
                <div className={`absolute font-light right-2 -top-1/4 ${active?"bg-gradient-to-tl from-[#39aDFa]  to-[#0038F066]  px-1":"bg-[#E4EEFC]"}`}>{date}</div>
                <span className={`${active ? 'bg-[#72FFF6]' : 'bg-[#FDC0AE]'} rounded-xl h-fit py-1 px-2`}>
                    {client.jobsCount} Jobs
                </span>
            </div>
        </div>
    )
}


export default JobCard;