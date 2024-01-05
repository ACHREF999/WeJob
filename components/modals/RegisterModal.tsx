'use client'
import useRegisterModal from '@/hooks/useRegisterModal'
import useLoginModal from '@/hooks/useLoginModal'
import Modal from './Modal'
import { useCallback,useState } from 'react'
import Input from '../Input'
import Select, { ThemeConfig } from 'react-select'
import toast from 'react-hot-toast'
import axios from 'axios'
import { signIn } from 'next-auth/react';


function RegisterModal() {
    const registerModal = useRegisterModal()
    const loginModal= useLoginModal() 
    const customTheme = (theme: any) => {
        return {
            ...theme,
            colors: {
                ...theme.colors,
                primary25: '#E4EEFC',
                primary: '#0146B1',
            },
        }
    }

    const userRoleOptions = [
        { value: 'CLIENT', label: 'Client' },
        { value: 'FREELANCER', label: 'Freelancer' },
    ]

    const userRoleStyles = {
        control: (styles:any) => ({
            ...styles,
            paddingTop: '4px',
            paddingBottom: '4px',
            // borderColor:"#00000000",
            // borderRight:"solid 1px #00000055",
            // borderRadius:"0px",
            // paddingRight:"10px",
        }),
        singleValue: (styles:any) => ({
            ...styles,
            color: '#014681dd',
            fontWeight: 600,
            fontSize: '20px',
            paddingLeft: '6px',
        }),
    }

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email:'',
        password:'',
        confirmPassword:'',
        profile:'CLIENT',
    })

    const [isLoading, setIsLoading] = useState(false)

    const onToggle = useCallback(()=>{
        if(isLoading) return 
        registerModal.onClose()
        loginModal.onOpen()
        return

    },[isLoading,registerModal,loginModal])

    const validateEmail = (email:string) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
    }

    const validatePassword = (password:string,confirmPassword:string)=>{
        if(!password || password.length < 3) return false
        if (password !== confirmPassword) return false

        return true
    }
    const validateData = ()=>{
        return !(
            !data.firstName ||
            !data.lastName ||
            !validateEmail(data.email) ||
            !validatePassword(data.password, data.confirmPassword) ||
            !data.profile
        )
    }


    const handleSubmit = async() => {
        if(!validateData()) return toast.error('Invalid Data')

        try{
            setIsLoading(true)
            // console.log(data)
            const res = await axios.post('/api/register',{
                firstName:data.firstName,
                lastName:data.lastName,
                email:data.email,
                role:data.profile,
                password:data.password,

            })
            
            toast.success('helleo')
            // console.log(data)
            
            await signIn('credentials',{
                email:data.email,
                password:data.password
            })
            // setData({
            //     firstName: '',
            //     lastName: '',
            //     email: '',
            //     password: '',
            //     confirmPassword: '',
            //     profile: 'CLIENT',
            // })
            registerModal.onClose()



        }
        catch(err){
            console.log(err)
        }
        finally{
            setIsLoading(false)
        }
    }


    const bodyContent = (
        <div className="flex flex-col gap-2 lg:gap-4 mt-2 xl:mt-8">
            <h1 className="pl-2 text-gray-400 font-medium">
                Join Us Now and explore The Talents and Jobs tailored for you
            </h1>
            <div className="flex flex-row gap-8">
                <Input
                    type="text"
                    disabled={isLoading}
                    placeholder="First Name"
                    value={data.firstName}
                    onChange={(e) =>
                        setData({ ...data, firstName: e.target.value })
                    }
                />
                <Input
                    type="text"
                    disabled={isLoading}
                    placeholder="Last Name"
                    value={data.lastName}
                    onChange={(e) =>
                        setData({ ...data, lastName: e.target.value })
                    }
                />
            </div>
            <Input
                type="email"
                disabled={isLoading}
                placeholder="Email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <Input
                type="password"
                disabled={isLoading}
                placeholder="Password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <Input
                type="password"
                disabled={isLoading}
                placeholder="Confirm Password"
                value={data.confirmPassword}
                onChange={(e) =>
                    setData({ ...data, confirmPassword: e.target.value })
                }
            />
            <div className="w-full ">
                <Select
                    onChange={(e) => setData({...data,profile:e?.value as string})}
                    options={userRoleOptions}
                    theme={customTheme}
                    styles={userRoleStyles}
                    // isSearchable
                    
                    placeholder="Type"
                    className="w-full"
                    defaultValue={{ value: 'CLIENT', label: 'Client' }}
                />
            </div>
        </div>
    )


    const footerContent = (
    <div>
        Already Have an account ? <span className="text-sky-500 cursor-pointer self-center" onClick={onToggle} >Sign In</span>
    </div>)

    return (
        <Modal
            isOpen={registerModal.isOpen}
            onClose={registerModal.onClose}
            onSubmit={handleSubmit}
            actionLabel="Sign Up"
            title="Sign Up"
            disabled={isLoading}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default RegisterModal
