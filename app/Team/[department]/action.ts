"use server"
import prisma from "@/db"
export async function GetAllMembers(){
    try {
        const response = await prisma.members.findMany({
            where:{
                
            }
        })
        return response
    } catch (error) {
        throw new Error(`${error}`)
    }
}