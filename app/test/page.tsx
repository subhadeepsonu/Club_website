"use client"
import { Button } from "@/components/ui/button";
import { sendEmail } from "@/utils/mailer";

export default function TestPage(){
    
    return <div className="h-screen w-full flex justify-center items-center">
        <Button onClick={()=>{
            sendEmail()
        }}>Send mail</Button>
    </div>
}