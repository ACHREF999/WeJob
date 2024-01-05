import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'
import prisma from '@/libs/prismadb'

export async function GET(
    req: NextApiRequest,
    { params }: { params: { offerId: string } }
) {
    const gigOffers = await prisma.offer.findUnique({
        where:{
            id:params.offerId
        }
    })
    return NextResponse.json(gigOffers, { status: 200 })
}
