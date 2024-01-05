// get single gig put delete

import { NextApiRequest } from "next";

import prisma from '@/libs/prismadb'
import {NextResponse} from 'next/server';




export async function GET(req:NextApiRequest,{params}:{params:{gigId:string}}){

    const gig = await prisma.gig.findUnique({
        where:{
            id:params.gigId
        }
    })

    return NextResponse.json(gig,{status:200})
}