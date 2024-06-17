"use server"
import prisma from "@/db"
export async function GetAllEvents(){
    try {
        const response = await prisma.events.findMany({
            orderBy:{
                date:"desc"
            }
        })
        return response
    } catch (error) {
        throw new Error(`${error}`)
    }
}