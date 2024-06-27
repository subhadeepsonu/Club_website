"use server"

import prisma from "@/db"

export async function AddMember(imgurl:string,name:string,departmentid:number){
    try {
        const response = await prisma.members.create({
            data:{
                imgurl:imgurl,
                name:name,
                departmentid:departmentid
            }
        })
        return response
    } catch (error) {
        console.log(`${error}`)
        throw new Error("something went wrong")
    }
}