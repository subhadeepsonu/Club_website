import prisma from "@/db";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"

export async function GET(){
    try {
    const token:any = cookies().get('token')
    const data:any = jwt.verify(token?.value,process.env.JWT_TOKEN_SECRET!)
    const response = await prisma.registeredEvents.findMany({
        where:{
            userid:data.id
        },
        include:{
            event:{
                
            },
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
            message:"something went wrong"
        })
    }
}
export async function POST(req:NextRequest){
    try {
        const data = await req.json()
        const available = await prisma.events.findUnique({
            where:{
                id:data.eventid
            },
            select:{
                isOpen:true
            }
        })
        console.log(available)
        if(available?.isOpen){
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
        }
        else{
            return NextResponse.json({
                success:false,
                message:"Registrations closed"
            })
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