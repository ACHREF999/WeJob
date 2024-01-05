import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'
import prisma from '@/libs/prismadb'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/libs/auth'
import serverAuth from '@/libs/serverAuth'
import { getServers } from 'dns'

export async function GET(
    req: NextApiRequest,
    { params }: { params: { gigId: string } }
) {
    const session = await getServerSession(authOptions)
    let currentUser = session?.user

    if(!currentUser || currentUser?.role=='FREELANCER') return NextResponse.json({data:[]},{status:209})

    const jobProposals = await prisma.offer.findMany({
        where: {
            gigId: params.gigId,
            clientId: currentUser.userId,
        },
    })
    return NextResponse.json({ data: jobProposals }, { status: 200 })
}
