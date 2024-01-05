'use client'

import {useState} from 'react'
import { useSearchParams } from 'next/navigation';
import Select, { GroupBase, SingleValue, ThemeConfig } from 'react-select'
import SearchBar from './SearchBar';
import useJobs from '@/hooks/useJobs';
import LoadingComp from '@/components/LoadingComp';
import JobCard from './JobCard';

type Props = {}

const JobsBlock = (props: Props) => {
  // hooks
  const params = useSearchParams()
  
  const [order,setOrder] = useState('NEWEST')
  // console.log(params.toString())

  const {data:jobs,isLoading,error} = useJobs(params.toString())
  // console.log(jobs)

  //styles
  const orderOptions = [
      {label:"Sort By : Newest",value:"NEWEST"},
      {label:"Sort By : Top Rated",value:"TOP_RATED"},
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
      color:"#333333",
      fontWeight:600,
      fontSize:"16px",
      paddingLeft:"6px",
  })
  }
  const customTheme = (theme: any) => {
      return {
          ...theme,
          colors: {
              ...theme.colors,
              primary25: '#33333311',
              // primary: '#0146B1',
              primary: '#33333344',
          },
      }
  }

  if(error){
    throw new Error('Failed To fetch Jobs')
  }

  return (
      <div className="w-[80%] rounded-xl border-[1px]  py-6 flex flex-col gap-8 items-start relative">
          {/* title */}
          <div className="w-full  border-b-[2px] px-4 relative py-1 pb-3">
              <span className="text-purple-700 border-b-purple-700 border-b-[4px] text-3xl font-medium pb-2 px-2">
                  Jobs
              </span>
          </div>

          {/* search bar */}
          <div className="w-full px-4 flex flex-row gap-10 relative  pb-6  border-b-[2px]">
              <SearchBar />
              <div className="w-[20%]">
                  <Select
                      onChange={(e :any) => {
                        setOrder(e.value)
                      }}
                      options={orderOptions as any}
                      theme={customTheme}
                      styles={categoryStyles}
                      // isSearchable
                      // autoFocus
                      placeholder="Type"
                      className="min-w-full"
                      defaultValue={{label:"Sort By : Newest",value:"NEWEST"}}

                      // defaultValue={'TALENT'}
                  />
              </div>
          </div>

          {/* Search Results */}
          <div className="w-full px-4 flex flex-col relative">
            <span className="mb-4 text-3xl font-normal ">
              
              Search Results
            </span>

            {isLoading?
            (<LoadingComp />)
            :
            jobs.data.length<1?
            (<h1 >No Matching Jobs Were Found</h1>)
            :(
              <div className="py-2">
                {jobs.data.map((job:any)=>(
                  <JobCard 
                  key={job.id}
                  id={job.id}
                  date={job.createdAt}
                  title={job.title}
                  pricing={job.pricing}
                  price={job.price}
                  description={job.description}
                  technicalSkills={job.skills||[]}
                  proposals={job._count.proposals}
                  />
                ))}
              </div>
            )
            
            }

          </div>

      </div>
  )
}

export default JobsBlock