import { NextApiRequest } from 'next'
import prisma from '@/libs/prismadb'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { authOptions } from '@/libs/auth'

export const GET = async (req: NextApiRequest) => {
    const session = await getServerSession(authOptions)
    if (!session)
        return NextResponse.json({ data: 'Not Signed In' }, { status: 405 })
    let gigContracts
    if (session?.user?.role == 'FREELANCER') {
        gigContracts = await prisma.gigContract.findMany({
            where: {
                freelancerId: session?.user?.userId,
            },
        })
    } else {
        gigContracts = await prisma.gigContract.findMany({
            where: {
                clientId: session?.user?.userId,
            },
        })
    }

    return NextResponse.json({ data: gigContracts }, { status: 200 })
}
