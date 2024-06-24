"use server"
import prisma from "@/db"
export async function ChangeEventState(eventId:number,change:boolean){
    try {
        const  response = await prisma.events.update({
            where:{
                id:eventId
            },
            data:{
                isOpen:change
            }
        })
        return response
    } catch (error) {
        throw new Error("something went wrong")
    }
} 