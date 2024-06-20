import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";
export async function POST(req:NextRequest){
    try {
        const data  = await req.json()
        const isOld = await prisma.user.findUnique({
            where:{
                email:data.email
            }
        })
        if(isOld){
            const isMatch = await bcrypt.compare(data.password,isOld.password)
            if(isMatch){
                const token = jwt.sign(isOld,"secert")
                cookies().set("token",token)
                return NextResponse.json({
                    success:true,
                    message:"Login Succesful",
                    token:token
                })
            }
            else{
                return NextResponse.json({
                    success:false,
                    message:"Incorrect Password"
                })
            }
        }
        else{
            return NextResponse.json({
                success:false,
                message:"User Does not Exist"
            })
        }

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success:false,
            message:"something went wrong"
        })
    }
}