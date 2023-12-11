'use client'
import useRegisterModal from '@/hooks/useRegisterModal'
import useLoginModal from '@/hooks/useLoginModal'
import Modal from './Modal'
import { useCallback,useState } from 'react'
import Input from '../Input'

function RegisterModal() {
    const registerModal = useRegisterModal()
    const loginModal= useLoginModal() 
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

    },[])
        const handleSubmit = useCallback(() => {
        console.log(data)
    }, [data])


    const bodyContent = (
        <div className="flex flex-col gap-4 mt-8">
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

            <select className="w-full p-3 text-lg border-neutral-300 border-[1px] rounded-xl outline-none focus:border-sky-500 focus:border-2 transition disabled:bg-opacity-70 disabled:bg-neutral-500 disabled:cursor-not-allowed my-2 pr-10" onChange={(e)=>setData({...data,profile:e.target.value})}>
                <option value="CLIENT">Client</option>
                <option value="FREELANCER">Freelancer</option>
            </select>
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
