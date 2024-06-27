import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {  AddMemberSchema } from "@/zod/scehma"
import z from 'zod'
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { AddMemberAction } from "@/actions/addMembers"
export default function AddMember(){
    const [imgurl,Setimgurl] = useState("")
    const form = useForm<z.infer<typeof AddMemberSchema>>({
        resolver:zodResolver(AddMemberSchema)
    })
    const values = form.getValues()
    const MutateAddMember = useMutation({
        mutationFn:()=>AddMemberAction(imgurl,values.name,2)
    })
    return <div className="h-screen w-full flex justify-center items-center">
        Add Member
    </div>
}