import prisma from "@/db";
import { GetDataFromToken } from "@/utils/GetDataFromTokeen";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    try {
        const token  = cookies().get('token')
        const data:any = jwt.decode(token?.value!)
        const response = await prisma.user.findUnique({
            where:{
                id:data.id
            },

        })
        return NextResponse.json({
            success:true,
            message:response
        })
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:`${error}`
        })
    }
}