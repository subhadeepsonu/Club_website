"use server"
import prisma from "@/db"
export async function AddDepartment(imgurl:string,name:string,year:number){
    try {
        const response = await prisma.department.create({
            data:{
                imgurl:imgurl,
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