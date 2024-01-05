// get single Job put delete


import type { NextApiRequest } from 'next'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/libs/auth'
import prisma from '@/libs/prismadb'
import { NextResponse } from 'next/server'

export async function GET(
    req: NextApiRequest,
    { params }: { params: { jobId: string } }
) {
    const session = await getServerSession(authOptions)
    // console.log(req.nextUrl.searchParams)
    // console.log('session: ',session)
    // console.log(req.query)
    // // console.log(req)
    // console.log(params)
    // // if (session?.user?.name) {
    // //     const data = await prisma.job.findMany({
    // //         where: {
    // //             client: session.user.userId,
    // //         },
    // //     })
    // // }
    try{
    const job = await prisma.job.findUnique({
        where:{
            id:params.jobId
        },
        include:{
            client:true,
            proposals:{
                select:{
                    id:true
                }
            }
        }
    })
    if(!job) throw new Error('')
    // console.log(job)

    return NextResponse.json({data:job},{
        status:200
    })
    }

    catch(err){
    return NextResponse.json(
            {msg:"Could Not Find The requested Job"},
            { status: 404 }
        )}
}
