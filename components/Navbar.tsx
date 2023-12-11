'use client'
import {useState} from 'react'
import Select from 'react-select'
import useLoginModal from '@/hooks/useLoginModal'
import useRegisterModal from '@/hooks/useRegisterModal'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Input from './Input'
import { RiSearchLine } from 'react-icons/ri'
import {FormEvent} from 'react'

interface PostOptionsType {
    value: string
    label: string
}
function Navbar() {
    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()
    const postStyles = {
        control: (styles) => ({
            ...styles,
            paddingTop: '4px',
            paddingBottom: '4px',
            border:'0',
            borderLeft:"1px solid #00000022",
            borderTopLeftRadius:"0px",
            borderBottomLeftRadius:"0px",
            paddingLeft:"4px",
            borderColor:"#000000",
            // borderRight:"solid 1px #00000055",
            borderRadius:"50px",
            outline:"none",
            boxShadow:'0 !important',
            '&:focus':{
                border:'0'
            }
            // paddingRight:"10px",
        }),
        singleValue: (styles) => ({
            ...styles,
            color: '#8301B1dd',
            fontWeight: 600,
            fontSize: '20px',
            paddingLeft: '6px',
        }),
    }
    const customTheme = (theme: any) => {
        return {
            ...theme,
            colors: {
                ...theme.colors,
                primary25: '#8301B155',
                primary: '#8301B122',
            },
        }
    }
    const postOptions: PostOptionsType[] = [
        { value: 'JOB', label: 'Job' },
        { value: 'TALENT', label: 'Talent' },
    ]
    const [postOption, setPostOption] = useState('TALENT')
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <>
            {/* Desktop Navbar  */}
            <div className="max-lg:hidden fixed inset-x-0 top-0 w-full z-50 h-[7vh] min-h-[60px] bg-white bg-opacity-90 backdrop-blur-[2px] flex flex-row justify-between items-center py-2 px-[5%] border-b-blue-200 border-opacity-70 border-b-[2px] ">
                <div className="flex flex-row gap-12 items-center font-semibold">
                    <img
                    src="/images/logo.png"
                    alt="WeeJob"
                    />
                    <Link href="/jobs">Find a Job</Link>
                    <Link href="/talents">Find a Talent</Link>
                    <Link href="/about">About</Link>
                </div>

                <div className="flex flex-row gap-4 lg:gap-10 items-center text-lg bg-white rounded-full">
                    <form
                        method="GET"
                        onSubmit={handleSubmit}
                        className="shadow-xs rounded-3xl flex flex-row h-full border-[1px] border-gray-300"
                    >
                        <button className="px-4 font-semibold rounded-l-3xl text-gray-400 hover:bg-[#8301B1dd] hover:text-white transition">
                            <RiSearchLine size={24} />
                        </button>
                        <input
                            placeholder="search..."
                            onChange={() => {}}
                            className="w-full p-0 text-lg  transition disabled:bg-opacity-70 disabled:bg-neutral-500 disabled:cursor-not-allowed  rounded-xl outline-none pl-2"
                        />
                        <Select
                            onChange={(e) => setPostOption(e.value)}
                            options={postOptions}
                            theme={customTheme}
                            styles={postStyles}
                            // isSearchable
                            autoFocus
                            placeholder="Type"
                            className="w-[200px]  border-none rounded-full "
                            defaultValue={'TALENT'}
                        />
                    </form>
                    <button
                        className="text-[#8301B1]  p-2 px-4 rounded-xl font-semibold"
                        onClick={loginModal.onOpen}
                    >
                        Login
                    </button>
                    <button
                        className="bg-[#8301B1] p-2 px-4 rounded-xl text-white font-semibold "
                        onClick={registerModal.onOpen}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar
