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
    const {currentUser} = await serverAuth(req)

    const jobProposals = await prisma.proposal.findMany({
        where:{
            jobId:params.jobId,
            userId:currentUser.id
        }
    })
    return NextResponse.json({data:jobProposals},{status:200})
}


