import bcrypt from 'bcrypt'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

import prisma from '@/libs/prismadb'

 async function handler(
    req: NextApiRequest
) {
    if (req.method !== 'POST') {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 405 }
        )
    }

    try {
        const data = await req.json()
        const { email, firstName, lastName, password,role } = data
        // console.log(data)
        if(!password ) return NextResponse.json({message:'no password'},{status:401})
        
        const hashedPassword = await bcrypt.hash(password, 12)

        const user = await prisma.user.create({
            data: {
                email,
                firstName,
                lastName,
                hashedPassword,
                role
            },
        })
        console.log('USER AFTER CREATION: ',user)

        return NextResponse.json(
            { user },
            { status: 201 }
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        )
    }
}

export {handler as POST }