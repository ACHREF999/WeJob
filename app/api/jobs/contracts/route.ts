import { NextApiRequest } from 'next';
import prisma from '@/libs/prismadb'
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '@/libs/auth';

export const GET=async(req:NextApiRequest)=>{
    
    const session = await getServerSession(authOptions)
    
    if(!session || !session.user || !session.user.userId ) return NextResponse.json({data:"Not Signed In"},{status:405})

    let jobContracts;
    
    if(session?.user?.role=='FREELANCER') {
        jobContracts= await prisma.jobContract.findMany({
        where:{
            freelancerId:session?.user?.userId
        }
    })}
    else{
        jobContracts = await prisma.jobContract.findMany({
            where:{
                clientId:session?.user?.userId
            }
        })
    }

    return NextResponse.json({data:jobContracts},{status:200})

    
}