'use client'
import {useState} from 'react'
import Input from '@/components/Input';
import { RiSearchLine } from 'react-icons/ri'

function SearchBar() {
  const [search,setSearch] = useState('')
  return (
    <div className="w-full flex flex-row rounded-lg border-[2px] border-gray-200">
        <input 
        onChange={(e)=>setSearch(e.target.value)}
        value={search}
        placeholder="search"
        className="border-none focus:border-none w-full px-6 outline-none rounded-l-lg text-xl"
        />
        <button className="border-none bg-[#740B99] text-white font-semibold text-lg   py-2 px-4  w-fit rounded-r-lg "><RiSearchLine size={24}/></button>
    </div>
  )
}

export default SearchBar