"use server"
import prisma from "@/db";
export async function GetAllDepartments(){
    try {
        console.log("haah")
        const responce = await prisma.department.findMany({
            
        })
        console.log(responce)
        return responce
    } catch (error) {
        throw new Error(`${error}`)
    }
}