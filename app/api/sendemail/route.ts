import { sendEmail } from "@/utils/mailer";
import { NextRequest, NextResponse } from "next/server";
 export const runtime = 'edge'
export async function POST(req:NextRequest){
    try {
        const data = await req.json()
        await sendEmail(data.email,data.name)
        return NextResponse.json({
            success:true,
            message:"mailsent"
        })
        
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:"failed"
        })
    }
}