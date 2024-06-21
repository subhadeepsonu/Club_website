"use server"
import prisma from "@/db";
export async function GetAllDepartments(year:number){
    try {
        console.log("haah")
        const responce = await prisma.department.findMany({
            orderBy:{
                id:"asc"
            },
            where:{
                year:year
            }
        })
        
        return responce
    } catch (error) {
        throw new Error(`${error}`)
    }
}