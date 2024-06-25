"use server"
import prisma from "@/db"
export async function EventMembers(id:number){
    try {
        const response = await prisma.events.findUnique({
            where:{
                id:id
            },
            include:{
                registeredEvents:{
                    include:{
                        user:{
                            select:{
                                password:false,
                                email:true,
                                id:true,
                                name:true
                            },
                        }
                    },
                    orderBy:{
                        id:"asc"
                    }
                }
            },
            
        })
        return response
    } catch (error) {
        console.log(error)
        throw  new Error(`${error}`)
    }
}