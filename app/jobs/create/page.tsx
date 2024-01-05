import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/libs/auth'
import { redirect } from 'next/navigation'
import Form from './components/Form'


type Props = {}

const CreateJob = async (props: Props) => {
    const session = await getServerSession(authOptions)
    if(!session || !session.user || !(session.user.role =='CLIENT')) {
        redirect('/')
    }
    return (
        <div className="mt-6">
            <Form />
        </div>
    )
}

export default CreateJob