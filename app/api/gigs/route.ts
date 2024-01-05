// if POST create

// if GET => get last ten or with keyword

import type { NextApiRequest } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/libs/auth";
import prisma from '@/libs/prismadb'
import { NextResponse ,type NextRequest} from 'next/server';
// import client from './../../../libs/prismadb';
import { CategoryType ,TechnicalSkills} from '@prisma/client';

export async function GET(req:NextRequest){
    const session = await getServerSession(authOptions)
    // console.log(session)
    const page = (parseInt(req.nextUrl.searchParams.get('page')||"") || 1) -1
    const size = parseInt(req.nextUrl.searchParams.get('size')||'10') 
    const keyword = req.nextUrl.searchParams.get('keyword') || ' '
    const skills = req.nextUrl.searchParams.getAll('skills') || []
    const category = req.nextUrl.searchParams.get('category') 

    

    const hourly = req.nextUrl.searchParams.get('hourly')
    const hourlyMinPrice = parseInt(req.nextUrl.searchParams.get('hourlyMinPrice')||'0')
    const hourlyMaxPrice = parseInt(
        req.nextUrl.searchParams.get('hourlyMaxPrice')||'9999999'
    )

    // console.log('hourly max price :',hourlyMaxPrice)

    const fixed = req.nextUrl.searchParams.get('fixed')
    const fixedMinPrice = parseInt(req.nextUrl.searchParams.get('fixedMinPrice')||'0')
    const fixedMaxPrice = parseInt(req.nextUrl.searchParams.get('fixedMaxPrice')||'9999999')


    let categoryQuery = {}
    if(category){
        categoryQuery = {
            skills: { some: { category: category } },
        }
    }

    let skillsQuery = {}
    if (skills){
        skillsQuery = {
            skills: { some: { stack: { hasEvery: skills } } },
        }
    }
    let hourlyQuery = {        
    }
    if(hourly?.length || (!hourly?.length && !fixed?.length)){
        hourlyQuery = {
            pricing:'HOURLY',
            AND:[
                {price:{gte:hourlyMinPrice}},
                {price:{lte:hourlyMaxPrice}}
                ]
            }
        }
    

    let fixedQuery = {
    }
    if (fixed?.length || (!hourly?.length && !fixed?.length)) {
        fixedQuery = {
            pricing: 'FIXED',
            AND:[
                {price:{gte:fixedMinPrice}},
                {price:{lte:fixedMaxPrice}}
                ]
        }
    }
    // let fixedQuery = {}
    // if (!Number.isNaN(fixedMinPrice)) {
    //     fixedQuery.price = {...fixedQuery.price, gt: fixedMinPrice }
    // }
    // if(!Number.isNaN(fixedMaxPrice)){
    //     fixedQuery.price = { gt: fixedMinPrice }

    // }

    const data = await prisma.gig.findMany({
        // select:{
        //     id:true
        // },
        include: {
            _count: {
                select: {
                    offers: true,
                    // id:true,
                },
            },
            freelancer:true,
        },
        where: {
            AND: [
                // keyword
                {
                    OR: [
                        { title: { contains: keyword, mode: 'insensitive' } },
                        {
                            description: {
                                contains: keyword,
                                mode: 'insensitive',
                            },
                        },
                        { skills: { some: { stack: { has: keyword } } } },
                    ],
                },
                // Category
                categoryQuery,
                // skills
                skillsQuery,
                // pricing and price
                {
                    OR: [hourlyQuery, fixedQuery],
                },
                {
                    NOT:{
                        freelancerId:session?.user?.userId || "asddsa"
                    }
                },
            ],
        },
        skip: page * size,
        take: size,
    })

    return NextResponse.json(
        {data},
        {status:200}
    )
    
    
}


export async function POST(req:Request){
    const session = await getServerSession(authOptions)
    const gigData = await req.json()
    console.log(gigData)
    let skills ={
        category:gigData.category,
        stack:gigData.skills as String[]
    }   as TechnicalSkills 
    let {title,price , pricing , description,duration}=gigData
    if(!session || !session.user || !(session?.user?.userId) || !(session.user.role=='FREELANCER')){
        return NextResponse.json({error:"Not Signed In"})
    }

    const gig = await prisma.gig.create({
        data:{
            title,
            price,
            pricing,
            description,
            duration,
            skills:[skills],
            freelancerId:session.user.userId,
        }
    })
    return NextResponse.json({data:gig},{status:201})

    // const job  = await prisma.job.create({data:})
}