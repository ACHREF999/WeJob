import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import prisma from '@/libs/prismadb'
// import { getServerSession } from 'next-auth';
import { authOptions } from '@/libs/auth';
import { CategoryType } from '@prisma/client';
import serverAuth from '@/libs/serverAuth';

export async function GET(req:NextApiRequest){
    const {currentUser} = await serverAuth(req)

    
    let recommendedGigs = await prisma.gig.findMany({
        where:{
            NOT:{
                freelancerId:currentUser.id
            }
        },
        include:{
            freelancer:true
        }
    })
    // if(recommendedGigs.length<2) {
    //     recommendedGigs = await prisma.gig.findMany({
    //         take:20,
    //     })
    // }

    return NextResponse.json({data:recommendedGigs},{status:200})

}
