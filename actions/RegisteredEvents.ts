"use server"

import prisma from "@/db"

export async function RegisteredEvents(id:string){
    try {
        const response = await prisma.registeredEvents.findMany({
            where:{
                userid:id
            },
            include:{
                event:{

                }
            }
        })
        return response
    } catch (error) {
        throw new Error(`${error}`)
    }
}