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
            },
            include:{
                registeredEvents:{
                    where:{
                        userid:"clxol63jn0000xgpl9ocy0f0u"
                    }
                }
            }
        })
        
        return response
    } catch (error) {
        throw new Error(`${error}`)
    }
}