import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'
import prisma from '@/libs/prismadb'

export async function GET(
    req: NextApiRequest,
    { params }: { params: { userId: string } }
) {
    const offersForAuser = await prisma.offer.findMany({
        where: {
            gig: {
                freelancerId: params.userId,
            },
        },
    })
    return NextResponse.json({"gigsPerUser":offersForAuser}, { status: 200 })
}
