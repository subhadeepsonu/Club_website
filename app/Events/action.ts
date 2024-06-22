"use server"
import prisma from "@/db"
export async function GetAllEvents(year:number,userid?:string){
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
                        userid:userid
                    }
                }
            }
        })
        
        return response
    } catch (error) {
        throw new Error(`${error}`)
    }
}