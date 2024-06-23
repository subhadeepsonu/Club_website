import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try {
        const data = await req.json()
        const response = await prisma.registeredEvents.findMany({
            where:{
                eventid:data.eventid
            },
            include:{
                user:{

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
export async function PATCH(req:NextRequest){
        try {
            const data = await req.json()
            const response = await prisma.registeredEvents.updateMany({
                where: {
                    eventid: data.eventid,
                    userid:data.userid
                },
                data:{
                    checkIn:true
                }
            })
            return NextResponse.json({
                success:true,
                message:"Succesfull"
            })
        } catch (error) {
            return NextResponse.json({
                success:false,
                messsage:"Something Went Wrong"
            })
        }
}