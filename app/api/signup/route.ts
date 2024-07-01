import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";
 export const runtime = 'edge'
export async function POST(req:NextRequest){
    try {
        const data = await req.json()
        const isOld = await prisma.user.findUnique({
            where:{
                email:data.email
            }
        })
        if(isOld){
            return NextResponse.json({
                success:false,
                message:"account already exists"
            })
        }
        else{
            const salt = await  bcrypt.genSalt(10)
            const hash = await bcrypt.hash(data.password,salt)
            const response = await prisma.user.create({
                data:{
                    email:data.email,
                    name:data.name,
                    password:hash
                }
            })
            const token =  jwt.sign(response,process.env.JWT_TOKEN_SECRET!)
            cookies().set('token',token)
            return NextResponse.json({
                success:true,
                message:"Sign Up Successful",
                token:token
            })
        }
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:"something went wrong"
        })
    }
}