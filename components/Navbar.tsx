'use client'
import {useEffect, useState} from 'react'
import Select from 'react-select'
import useLoginModal from '@/hooks/useLoginModal'
import useRegisterModal from '@/hooks/useRegisterModal'
import Link from 'next/link'
import { useRouter,useSearchParams } from 'next/navigation'
import Input from './Input'
import { RiSearchLine } from 'react-icons/ri'
import {FormEvent} from 'react'
// import { SessionProvider } from 'next-auth/react'
import { getSession } from 'next-auth/react'
import {signOut} from 'next-auth/react'
import { useSession } from 'next-auth/react'
import LoadingComp from './LoadingComp'
import Image from 'next/image'

interface PostOptionsType {
    value: string
    label: string
}
function Navbar() {

    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()
    const [user,setUser] = useState<any>(null)
    const router = useRouter()
    const params = useSearchParams()
    const [keyword,setKeyword] = useState('')
    const { data: session, status } = useSession()
    // console.log(session)
    // console.log(status)
    // if(status==='authenticated') setUser(session.user)

    // useEffect(()=>{

    //     const session = getSession()
    //     session.then(res=> {console.log(res);setUser(res?.user)})
    //     if(user){

    //     }

    // },[])
    // session.then(res=> {console.log(res);setUser({email:res?.user?.email ||'',image: ((res?.user?.image )? res?.user?.image : null)})})

    const postStyles = {
        control: (styles:any) => ({
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
        singleValue: (styles:any) => ({
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
        if(postOption==='TALENT'){
            if(keyword && keyword.length>0) router.push(`/gigs?keyword=${keyword}`)
            else{
                router.push(`/gigs`)
            }
        }
        else{
            if(keyword && keyword.length>0) router.push(`/jobs?keyword=${keyword}`)
            else{
                router.push('/jobs')
            }
        }
        
    }
    
    useEffect(()=>{
        if(params.get('keyword')) setKeyword(params.get('keyword') as string);
    },[params])
    console.log(session)

    return (
        <>
            {/* Desktop Navbar  */}
            <div className="max-lg:hidden fixed inset-x-0 top-0 w-full z-50 h-[7vh] min-h-[60px] bg-white bg-opacity-90 backdrop-blur-[2px] flex flex-row justify-between items-center py-2 px-[5%] border-b-blue-200 border-opacity-70 border-b-[2px] ">
                <div className="flex flex-row gap-12 items-center font-semibold">
                    <Link href="/">
                        <img src="/images/logo.png" alt="WeeJob" />
                    </Link>
                    <Link href="/jobs">Find a Job</Link>
                    <Link href="/gigs">Find a Talent</Link>
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
                            onChange={(e) => {setKeyword(e.target.value)}}
                            value={keyword}
                            className="w-full p-0 text-lg  transition disabled:bg-opacity-70 disabled:bg-neutral-500 disabled:cursor-not-allowed  rounded-xl outline-none pl-2"
                        />
                        <Select
                            onChange={(e) => setPostOption(e?.value as string)}
                            options={postOptions}
                            theme={customTheme}
                            styles={postStyles}
                            // isSearchable
                            placeholder="Type"
                            className="w-[200px]  border-none rounded-full "
                            defaultValue={{ value: 'TALENT', label: 'Talent' }}
                        />
                    </form>
                    {(status === 'loading' ) ? (<LoadingComp/>): (status=='authenticated')?(
                        <>
                            <button
                                className="text-[#8301B1]  p-2 px-4 rounded-xl font-semibold"
                                onClick={(e) => signOut()}
                            >
                                LogOut
                            </button>
                            <Link href={`/profile/${session?.user?.userId}`}>
                                <div className="flex flex-row gap-4 rounded-xl  items-center px-4">
                                    <span className="font-medium">
                                        {session?.user?.name}
                                    </span>
                                    <div className="h-12 w-12 relative">
                                    <Image 
                                    src={session?.user?.image  || '/images/placeholder.png'}
                                    // width={120}
                                    // height={120}
                                    fill
                                    objectFit='cover'
                                    alt={"Profile Image"}
                                    className="rounded-full"
                                    />
                                    </div>
                                </div>
                            </Link>
                        </>
                    ):(
                        <>
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
                        </>
                    ) }
                </div>
            </div>
        </>
    )
}

export default Navbar
