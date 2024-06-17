"use server"
import prisma from "@/db"
export async function GetAllEvents(year:number){
    try {
        const response = await prisma.events.findMany({
            orderBy:{
                date:"desc"
            },
            where:{
                year:year
            }
        })
        return response
    } catch (error) {
        throw new Error(`${error}`)
    }
}