"use server"
import prisma from "@/db"
export async function CheckIn(id:string,checkIn:boolean){
    try {
        console.log("haha")
        const response = await prisma.registeredEvents.update({
            where:{
                id:id
            },
            data:{
                checkIn:checkIn
            },
            
        })
        return response
    } catch (error) {
        throw new Error(`${error}`)
    }
}