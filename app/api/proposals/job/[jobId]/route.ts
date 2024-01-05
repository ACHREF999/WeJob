import { NextApiRequest } from "next";
import {NextResponse} from 'next/server';
import prisma from '@/libs/prismadb'
import { getServerSession } from 'next-auth';
import { authOptions } from "@/libs/auth";
import serverAuth from "@/libs/serverAuth";


export async function GET(
    req:NextApiRequest,
    {params}:{params:{jobId:string}}
){
    const session = await getServerSession(authOptions)
    let currentUser = session?.user

    if(!currentUser || currentUser?.role=='FREELANCER') return NextResponse.json({data:[]},{status:209})

    const jobProposals = await prisma.proposal.findMany({
        where:{
            jobId:params.jobId,
            userId:currentUser.userId
        }
    })
    return NextResponse.json({data:jobProposals},{status:200})
}


