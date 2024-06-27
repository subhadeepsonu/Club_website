import { sendEmail } from "@/utils/mailer";
import { NextResponse } from "next/server";

export async function POST(){
    try {
        await sendEmail()
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