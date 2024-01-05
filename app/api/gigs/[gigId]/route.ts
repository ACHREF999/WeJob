// get single gig put delete

import { NextApiRequest } from "next";

import prisma from '@/libs/prismadb'
import {NextResponse} from 'next/server';




export async function GET(req:NextApiRequest,{params}:{params:{gigId:string}}){

    const gig = await prisma.gig.findUnique({
        where:{
            id:params.gigId
        },
        include:{
            freelancer:{
                select:{
                    firstName:true,
                    lastName:true,
                    id:true,
                    createdAt:true,
                    _count:{
                        select:{
                            createdGigs:true
                        }
                    },
                    
                }
            },
            contract:true
            
        }
    })

    return NextResponse.json({data:gig},{status:200})
}