import serverAuth from "@/libs/serverAuth";
import { NextResponse,type NextRequest } from "next/server";
import prisma  from '@/libs/prismadb';


export const POST = async(req:NextRequest)=>{
    const {currentUser} = await serverAuth(req)
    if(currentUser.role!=='CLIENT') return NextResponse.json({error:'FREELANCER account can not make an offer'},{status:400})
    const { gigId, letter, duration, price, pricing } = await req.json()
    console.log(gigId)
    if (!gigId) {
        return NextResponse.json({ error: 'Bad Request' }, { status: 400 })
    }
    
    const exists = await prisma.offer.findMany({
        where:{
            gigId:gigId,
            clientId:currentUser.id
        }
    })
    if(exists.length > 0) {
        return NextResponse.json({ error: 'User Already made an offer' }, { status: 400 })
    }

    const offer = await prisma.offer.create({
        data: {
            letter: letter,
            duration: duration,
            price: price,
            pricing: pricing,
            gigId: gigId,
            clientId: currentUser.id,
        },
    })

    return NextResponse.json({data:offer},{status:201})
}