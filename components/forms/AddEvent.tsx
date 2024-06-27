"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AddEventSchema } from "@/zod/scehma"
import z from "zod"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { AddEventAction } from "@/actions/addEvent"
export default function AddEvent(){
    const [imgurl,setImgurl] = useState("")
    const form = useForm<z.infer<typeof AddEventSchema>>({
        resolver: zodResolver(AddEventSchema)
    })
    const values = form.getValues()
    const MutateAddEvent = useMutation({
        mutationFn:()=>AddEventAction(values.date,values.description,imgurl,values.location,values.name,parseInt(values.year))
    })
    return <div className="min-h-screen w-full flex justify-center items-center">
        Add Event
    </div>
}