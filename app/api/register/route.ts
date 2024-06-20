import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req:NextRequest){
    try {
        const data = await req.json()
        const alreadyIn = await prisma.registeredEvents.findMany({
            where:{
                userid:data.userid,
                eventid:data.eventid
            }
        })
        if(alreadyIn.length!=0){
            console.log(alreadyIn)
            return NextResponse.json({
                success:false,
                message:"Already Registered"
            })
        }
        else{
            const response = await prisma.registeredEvents.create({
                data:{
                    userid:data.userid,
                    eventid:data.eventid
                }
            })
            if(response){
            return NextResponse.json({
                success:true,
                message:"Registered Successfully"
            })
        }
        else{
            return NextResponse.json({
                success:false,
                message:"could not register"
            })
        }
        }
    } catch (error) {
            return NextResponse.json({
                success:false,
                message:"Something went wrong"
            })
    }
}
export async function DELETE(req:NextRequest){
    try {
        const data = await req.json()
        const response = await prisma.registeredEvents.deleteMany({
            where:{
                eventid:data.eventid,
                userid:data.userid
            }
        })
        if(response){
            return NextResponse.json({
                success:true,
                message:"Deleted Successfully"
            })
        }
        else{
            return NextResponse.json({
                success:false,
                message:"Could Not Delete"
            })
        }
    } catch (error) {
        
    }
}