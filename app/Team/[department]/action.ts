"use server"
import prisma from "@/db"
export async function GetAllMembers(id:number){
    try {
        const response = await prisma.members.findMany({
            where:{
                departmentid:id
            },
            orderBy:{
                id:"asc"
            },
            include:{
                department:{
                    select:{
                        name:true
                    }
                }
            }
        })
        return response
    } catch (error) {
        throw new Error(`${error}`)
    }
}