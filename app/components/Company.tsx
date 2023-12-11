interface CompanyProps{
    name:string;
    Icon:React.ReactNode
}

function Company({name,Icon}:CompanyProps){
    return (
        <div className="flex flex-row items-center text-xl lg:text-2xl gap-2 ">
            <Icon size={28}/>
            <span>{name}</span>
        </div>
    )
}

export default Company;