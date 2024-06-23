"use server"
import prisma from "@/db"
export async function GEtAllEvents(){
    try {
        const response = prisma.events.findMany({
            orderBy:{
                id:"desc"
            }
        })
        return response
    } catch (error) {
        throw new Error(`${error}`)
    }
}