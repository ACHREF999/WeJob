'use client'
import useLoginModal from '@/hooks/useLoginModal'
import useRegisterModal from '@/hooks/useRegisterModal'
import Modal from './Modal'
import { useCallback, useState } from 'react'
import Input from '@/components/Input'
import {signIn} from 'next-auth/react'


function LoginModal() {
    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()
    const [data, setData] = useState({
        email: '',
        password: '',

    })
    const [isLoading, setIsLoading] = useState(false)

    const onToggle = useCallback(() => {
        if (isLoading) return
        loginModal.onClose()
        registerModal.onOpen()
        return
    }, [])


    const bodyContent = (
        <div className="flex flex-col gap-10 mt-10">
            <h1 className="pl-2 text-gray-400 font-medium">
                Welcome Back to WeeJob
            </h1>
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
        </div>
    )
    const footerContent = (
        <div>
            Dont Have an account ?{' '}
            <span
                className="text-sky-500 cursor-pointer self-center"
                onClick={onToggle}
            >
                Sign Up
            </span>
        </div>
    )
    const handleSubmit = async () => {
        setIsLoading(true)
        await signIn('credentials',{
            
            email:data.email,
            password:data.password
        })
        console.log(loginModal)
        setIsLoading(false)
        loginModal.onClose()
    }

    return (
        <Modal
            isOpen={loginModal.isOpen}
            onClose={loginModal.onClose}
            onSubmit={handleSubmit}
            actionLabel="Login"
            title="Login"
            footer={footerContent}
            body={bodyContent}
            disabled={isLoading}
        />
    )
}

export default LoginModal
