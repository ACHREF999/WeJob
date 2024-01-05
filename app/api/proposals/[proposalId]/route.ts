import { NextApiRequest } from "next";
import {NextResponse} from 'next/server';
import prisma from '@/libs/prismadb'


export async function GET(
    req:NextApiRequest,
    {params}:{params:{proposalId:string}}
){

    const jobProposals = await prisma.proposal.findUnique({
        where:{
            id:params.proposalId
        }
    })
    return NextResponse.json(jobProposals,{status:200})



}


