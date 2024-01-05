import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'
import prisma from '@/libs/prismadb'

export async function GET(
    req: NextApiRequest,
    { params }: { params: { userId: string } }
) {
    const proposalsToAClient = await prisma.proposal.findMany({
        where:{
            job:{
                clientId:params.userId
            }

        }
    })
    return NextResponse.json({ ['proposals made to ' + params.userId]:proposalsToAClient}, { status: 200 })
}
