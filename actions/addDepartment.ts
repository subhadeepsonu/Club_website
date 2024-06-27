"use server"
import prisma from "@/db"
export async function AddDepartmentAction(name:string,year:number){
    try {
        const response = await prisma.department.create({
            data:{
                name:name,
                year:year
            }
        })
        return response
    } catch (error) {
        console.log(`${error}`)
        throw new Error("something went wrong")
    }
}