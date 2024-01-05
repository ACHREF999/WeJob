import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'
import prisma from '@/libs/prismadb'

export async function GET(
    req: NextApiRequest,
    { params }: { params: { userId: string } }
) {
    const user = await prisma.user.findUnique({
        where: {
            id: params.userId,
        },
    })
    if (!user) {
        return NextResponse.json({ message: 'Bad User' }, { status: 400 })
    }
    const userJobs = await prisma.gig.findMany({
        where: {
            freelancerId: params.userId,
        },
    })

    return NextResponse.json({ data: userJobs }, { status: 200 })
}
