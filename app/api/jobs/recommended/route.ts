import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import prisma from '@/libs/prismadb'
// import { getServerSession } from 'next-auth';
import { authOptions } from '@/libs/auth';
import { CategoryType } from '@prisma/client';
import serverAuth from '@/libs/serverAuth';

export async function GET(req:NextApiRequest){
    // const session = await getServerSession(authOptions)
    const {currentUser} = await serverAuth(req)
    // console.log(currentUser)
    // if (!session || !session.user || !session.user.userId){
    //     return NextResponse.json({message:"Not Signed In"},{status:405})
    //     }
    let user = currentUser;
    // const user = await prisma.user.findUnique({
    //     where: {
    //         // id:session.user.userId
    //         // id: '6579e2fa4cc1055486e92b35',
    //         id:currentUser.id
    //     },
    // })
    // console.log(user)
    if(!user){
        return NextResponse.json({ message: 'Not Signed In' }, { status: 405 })
    }
    const stacks  = user.skills.map(tech=>tech.stack).flat()
    const categories = user.skills.map(tech=>tech.category)

    // now we have a user and we know we are logged in
    const recommendedJobs = await prisma.job.findMany({
        where:{
            skills:{
                // includes:{
                some:{
                
                    category:{
                        
                        in: categories as CategoryType[]
                    },
                stack:{
                    hasSome:stacks
                },
            }}
            }
        }
    ) 

    return NextResponse.json({data:recommendedJobs},{status:200})

}