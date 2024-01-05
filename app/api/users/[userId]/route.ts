import { NextApiRequest } from "next";
import {NextResponse} from 'next/server'
import prisma from '@/libs/prismadb';


export async function GET(
    req:NextApiRequest,
    {params}:{params:{userId:string}})
{
    const user = await prisma.user.findUnique({
        where:{
            id:params.userId
        },
        include:{
            // createdJobs:true,
            // createdGigs:true,
        }
    })

    if(!user){
        return NextResponse.json({data:user},{status:404})
    }
    return NextResponse.json({data:user},{status:200})

}