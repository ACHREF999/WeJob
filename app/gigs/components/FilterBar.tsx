'use client'
import { useSearchParams,useRouter,usePathname } from "next/navigation"
import Select, { GroupBase, SingleValue, ThemeConfig } from 'react-select'
import {useEffect, useState} from 'react'

type Props = {}

const FilterBar = (props: Props) => {
    // hooks
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname= usePathname()
    const params = new URLSearchParams(Array.from(searchParams.entries()))
    
    const [hourly , setHourly] = useState(true)
    const [hourlyMinPrice,setHourlyMinPrice] = useState<number|null>(parseInt(searchParams.get('hourlyMinPrice')||"")||null)
    const [hourlyMaxPrice,setHourlyMaxPrice] = useState<number|null>(parseInt(searchParams.get('hourlyMaxPrice')||"")||null)

    const [fixed,setFixed] = useState(true)
    const [fixedMinPrice,setFixedMinPrice] = useState<number|null>(parseInt(searchParams.get('fixedMinPrice')||"")||null)
    const [fixedMaxPrice,setFixedMaxPrice] = useState<number|null>(parseInt(searchParams.get('fixedMaxPrice')||"")||null)
    // console.log(hourlyMinPrice)

    const [skills,setSkills] = useState<string[]>([])



    // styling
    const categoryOptions = [
        {label:"Web Development",value:"WEB_DEVELOPMENT"},
        {label:"Mobile Development",value:"MOBILE_DEVELOPMENT"},
        {label:"UI/UX Design",value:"UI_UX_DESIGN"},
        {label:"Project Management",value:"PROJECT_MANAGEMENT"},
        {label:"Video Editing",value:"VIDEO_EDITING"},
        {label:"Artifical Intelligence",value:"ML_MODEL"},
        {label:"Marketing",value:"MARKETING"}
    ]
    const categoryStyles = {
    control: (styles:any) => ({
        ...styles,
        paddingTop: '2px',
        paddingBottom: '2px',
        // borderColor:"#00000000",
        // borderRight:"solid 1px #00000055",
        // borderRadius:"0px",
        // paddingRight:"10px",
        fontSize:'12px'
    }),
    singleValue:(styles:any)=>({
        ...styles,
        color:"#0146B1dd",
        fontWeight:600,
        fontSize:"12px",
        paddingLeft:"6px",
    })
    }
    const skillsOptions = [
        {label:"React",value:"REACT"},
        {label:"HTML",value:"HTML"},
        {label:"CSS",value:"CSS"},
        {label:"Nodejs",value:"NODEJS"},
        {label:"Angular",value:"ANGULAR"},
        {label:"Flask",value:"FLASK"},
        {label:"Python",value:"PYTHON"}
    ]
    const customTheme = (theme:any)=>{
    return {
        ...theme,
        colors: {
            ...theme.colors,
            primary25: '#E4EEFC',
            // primary: '#0146B1',
            primary: '#01b641',
            },
        }
    }


    // handlers
    const handleCategory = (e:any)=>{
        if (!e.value) {
            params.delete('category')
            
        }
        else{
            params.set('category', (e.value ))
        }
        // cast to string
        const search = params.toString()
        // or const query = `${'?'.repeat(search.length && 1)}${search}`;
        const query = search ? `?${search}` : ''

        router.push(`${pathname}${query}`)
    }

    useEffect(()=>{
        const params = new URLSearchParams(Array.from(searchParams.entries()))

        if(!hourly){
            params.delete('hourly')
        }
        else{
            params.set('hourly','true')
        }
        
        if(hourlyMaxPrice==null || Number.isNaN(hourlyMaxPrice) ){
            params.delete('hourlyMaxPrice')
        }
        else{
            params.set('hourlyMaxPrice',hourlyMaxPrice.toString())
        }

        if(hourlyMinPrice==null || Number.isNaN(hourlyMinPrice) ){
            params.delete('hourlyMinPrice')
        }
        else{
            params.set('hourlyMinPrice',hourlyMinPrice.toString())
        }

        if(!fixed){
            params.delete('fixed')
        }
        else{
            params.set('fixed','true')
        }
        
        if(fixedMaxPrice==null  || Number.isNaN(fixedMaxPrice)){
            params.delete('fixedMaxPrice')
        }
        else{
            params.set('fixedMaxPrice',fixedMaxPrice.toString())
        }

        if(fixedMinPrice==null || Number.isNaN(fixedMinPrice)){
            params.delete('fixedMinPrice')
        }
        else{
            params.set('fixedMinPrice',fixedMinPrice.toString())
        }
        

        // cast to string
        const search = params.toString()
        // or const query = `${'?'.repeat(search.length && 1)}${search}`;
        const query = search ? `?${search}` : ''

        router.push(`${pathname}${query}`)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[hourly,hourlyMaxPrice,hourlyMinPrice,fixed,fixedMaxPrice,fixedMinPrice,skills])


    return (
        <div className="w-[15%] p-4 py-6 rounded-xl border-[1px flex flex-col items-start">
            <h1 className="text-3xl font-medium text-black pb-8">Filter By : </h1>
            {/* category */}
            <div className="w-full flex flex-col gap-2 pb-4 mb-4 border-b-[1px] pl-2">
                <h3 className="text-gray-600  text-md">Category :</h3>
                <div className="w-full min-w-full">
                    <Select
                        onChange={(e)=>{handleCategory(e)}}
                        options={categoryOptions as any}
                        theme={customTheme}
                        styles={categoryStyles}
                        // isSearchable
                        // autoFocus
                        placeholder="Type"
                        className="min-w-full"
                        defaultValue={categoryOptions.filter(item=>item.value==searchParams.get('category'))[0]}

                        // defaultValue={'TALENT'}

                    />
                </div>
            </div>

            
            {/* SKILLS */}
            {params.get("category") ? (<div className="w-full flex flex-col gap-2 pb-4 mb-4 border-b-[1px] pl-2">
                <h3 className="text-gray-600  text-md pb-6" >Skills : </h3>
                <div className="w-full ">
                    <Select
                        placeholder="Select skills"
                        onChange={(e) => {
                            setSkills((prev) =>
                            e.map((option) => {
                                return option.value
                            })
                        )
                        }}
                        noOptionsMessage={() => 'Unknown Skill .'}
                        theme={customTheme}
                        isSearchable
                        isMulti
                        className="w-full hide-scrollbar"
                        options={skillsOptions}
                        styles={categoryStyles}
                    />
                </div>
            </div>):null}


            {/* pricing */}
            <div className="w-full flex flex-col gap-2 pb-4 mb-4 border-b-[1px] pl-2">
                <h3 className="text-gray-600  text-md pb-6">Pricing :</h3>
                <div>

                    {/* HOURLY */}
                
                <div className="flex flex-row items-center">
                    <input id="hourly" type="checkbox" checked={hourly} onChange={(e)=>setHourly(!hourly)} className="rounded-xl w-4 h-4 mr-2 accent-green-600" />
                    <label htmlFor="hourly">
                        Hourly
                    </label>
                </div>
                <div className="flex flex-row items-center gap-8 py-4 w-full">
                    
                    <div className="w-[45%] flex flex-row items-center  rounded-lg border-[1px] px-2 py-1">
                        <input type="number" placeholder="min" id="HourlyMinPrice"  className="w-[3.25rem] outline-none" value={hourlyMinPrice||undefined} onChange={e=>setHourlyMinPrice(parseInt(e.target.value))}/>
                        <label htmlFor="HourlyMinPrice" className="text-sm">/hr</label>
                    </div>

                    <div className="w-[45%] flex flex-row items-center  rounded-xl border-[1px] px-2 py-1">
                        <input type="number" placeholder="max" id="HourlyMaxPrice" className="w-[3.25rem] outline-none" onChange={e=>setHourlyMaxPrice(parseInt(e.target.value))}/>
                        <label htmlFor="HourlyMaxPrice" className="text-sm">/hr</label>
                    </div>
                </div>

                {/* FIXED */}
                <div className="flex flex-row items-center">
                    <input id="fixed" type="checkbox" checked={fixed} onChange={(e)=>setFixed(!fixed)} className="rounded-xl w-4 h-4 mr-2 accent-green-600" />
                    <label htmlFor="fixed">
                        Fixed
                    </label>
                </div>
                <div className="flex flex-row items-center gap-8 py-4 w-full">
                    
                    <div className="w-[45%] flex flex-row items-center rounded-lg border-[1px] px-2 py-1">
                        <input type="number" placeholder="min" id="HourlyMinPrice"  className="w-[3.25rem] outline-none" onChange={e=>setFixedMinPrice(parseInt(e.target.value))}/>
                        <label htmlFor="HourlyMinPrice" className="text-xs">.DZD</label>
                    </div>

                    <div className="w-[45%] flex flex-row items-center  rounded-xl border-[1px] px-2 py-1">
                        <input type="number" placeholder="max" id="HourlyMaxPrice" className="w-[3.25rem] outline-none" onChange={e=>setFixedMaxPrice(parseInt(e.target.value))}/>
                        <label htmlFor="HourlyMaxPrice" className="text-xs">.DZD</label>
                    </div>
                </div>



                </div>
            </div>




        </div>
    )
}

export default FilterBar