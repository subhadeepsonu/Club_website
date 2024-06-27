"use server"
import prisma from "@/db"
export async function AddEventAction(date:string,description:string,imgurl:string,location:string,name:string,year:number){
    try {
        const response = await prisma.events.create({
            data:{
                date:date,
                description:description,
                imgurl:imgurl,
                location:location,
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