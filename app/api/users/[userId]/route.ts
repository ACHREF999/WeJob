import { NextApiRequest } from "next";
import {NextResponse,type NextRequest} from 'next/server'
import prisma from '@/libs/prismadb';
import serverAuth from "@/libs/serverAuth";
import { authOptions } from "@/libs/auth";


export async function GET(
    req:NextApiRequest,
    {params}:{params:{userId:string}})
{
    const user = await prisma.user.findUnique({
        where:{
            id:params.userId
        },
        include:{
            createdJobs:true,
            createdGigs:true,
            offers:{
                select:{
                    id:true
                }
            }
        }
    })

    if(!user){
        return NextResponse.json({data:user},{status:404})
    }
    return NextResponse.json({data:user},{status:200})
}


export const PUT = async(req:NextRequest,{params}:{params:{userId:string}}) =>{
    const {currentUser} = await serverAuth(req)
    if(currentUser.id!=params.userId) return NextResponse.json({error:"Unauthorized to update another user"},{status:405})
    const data = await req.json()
    console.log(data)
    const newUser = await prisma.user.update({
        where: {
            id: params.userId,
        },
        data: {
            firstName: data?.firstName,
            lastName: data?.lastName,
            image:
                data?.image?.length && data.image.length > 0
                    ? data.image
                    : null,

            description:
                data?.description?.length && data.description.length > 0
                    ? data.description
                    : null,

            githubLink:
                data?.githubLink?.length && data.githubLink.length > 0
                    ? data.githubLink
                    : null,
            
            linkedinLink:
                data?.linkedinLink?.length && data.linkedinLink.length > 0
                    ? data.linkedinLink
                    : null,
        },
    })
    return NextResponse.json({ data: newUser }, { status: 203 })
}