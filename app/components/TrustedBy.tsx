import { GiNetworkBars, GiGasPump } from 'react-icons/gi'
import { BiHealth } from 'react-icons/bi'
import Company from './Company'


function TrustedBy() {
    const companies = [
        {
            name: 'Djezzy',
            Icon: GiNetworkBars,
        },
        {
            name: 'Sonatrach',
            Icon: GiGasPump,
        },
        {
            name: 'BioTech',
            Icon: BiHealth,
        },
    ]
    return (
        <div className="flex flex-col self-center mt-16 text-[#8A5252] mb-6 cursor-default">
            <h1 className="self-center text-xl lg:text-2xl p-4 ">Trusted By Major Companies</h1>
            {/* Companies */}
            <div className="flex flex-row flex-wrap gap-10 lg:gap-16 self-center p-4">
                {companies.map(company=>(
                    <Company name={company.name} Icon={company.Icon} key={company.name}/>
                ))}
            </div>
        </div>
    )
}

export default TrustedBy
