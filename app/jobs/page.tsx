// import { useSearchParams } from 'next/navigation'
import React from 'react'
import FilterBar from './components/FilterBar'
import JobsBlock from './components/JobsBlock'


type Props = {
  // params:{
  //   keyword?:string,
  //   pricing?:string,
  //   min_price?:string,
  //   max_price?:string,
  //   category?:string,
  //   skills?:string[]
  // }
}

export default function JobsSearchPage() {
  // const params = useSearchParams()
  // console.log('Keyword: '+params.get("keyword"));

  return (
    <div className="flex flex-row mt-6 w-full gap-8">
      {/* The search page for jobs \ */}
      <FilterBar />
      <JobsBlock />
    </div>
  )
}