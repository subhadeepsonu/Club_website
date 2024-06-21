import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req:NextRequest){
    try {
        const data = await req.json()
        const response = await prisma.registeredEvents.findMany({
            where:{
                userid:data.userid
            },
            include:{
                event:{

                }
            }
        })
        return NextResponse.json({
            success:true,
            message:response
        })
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:"Something Went Wrong"
        })
    }
}