"use server"

import prisma from "@/db"

export async function AddMemberAction(imgurl:string,name:string,departmentid:number,gitlink:string,linkedin:string){
    try {
        const response = await prisma.members.create({
            data:{
                imgurl:imgurl,
                name:name,
                gitlink:gitlink,
                linkedin:linkedin,
                departmentid:departmentid
            }
        })
        return response
    } catch (error) {
        console.log(`${error}`)
        throw new Error("something went wrong")
    }
}