import { cookies } from "next/headers";
import { NextResponse } from "next/server";
 
export async function GET(){
    try {
        console.log("haha")
        cookies().set('token','')
        console.log("hhah")
       return NextResponse.json({
            success:true,
            message:"Log out successful"
        })

    } catch (error) {
        return NextResponse.json({
            success:false,
            message:"Something went wrong"
        })
    }
}