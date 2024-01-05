import { NextResponse, type NextRequest } from "next/server";
import prisma from '@/libs/prismadb';
import serverAuth from "@/libs/serverAuth";
import { NextApiRequest } from "next";


export async function POST(req: NextRequest) {
    const { currentUser } = await serverAuth(req)
    const { jobId, letter, duration, price, pricing } = await req.json()
    console.log(jobId)
    if (!jobId) {
        return NextResponse.json({ error: 'Bad Request' }, { status: 400 })
    }

    const exists = await prisma.proposal.findMany({
        where: {
            userId: currentUser.id,
            jobId: jobId,
        },
    })
    console.log(exists)
    if (exists.length>0) {
        return NextResponse.json(
            { error: 'User Already Proposed To This Job' },
            { status: 400 }
        )
    }

    const proposal = await prisma.proposal.create({
        data: {
            letter: letter,
            duration: duration,
            price: price,
            pricing: pricing,
            jobId: jobId,
            userId: currentUser.id,
        },
    })

    return NextResponse.json({data:proposal},{status:201})
}