"use server"
import prisma from "@/db";
export async function GetAllDepartments(year:number){
    try {
        console.log("haah")
        const responce = await prisma.department.findMany({
            where:{
                year:year
            }
        })
        console.log(responce)
        return responce
    } catch (error) {
        throw new Error(`${error}`)
    }
}