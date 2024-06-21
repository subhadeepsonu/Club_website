import prisma from "@/db";
import { GetDataFromToken } from "@/utils/GetDataFromTokeen";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    try {
        const data = await GetDataFromToken(req)
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
            message:"Something Went Wrong"
        })
    }
}