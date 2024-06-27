"use client"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AddDepartmentSchema } from "@/zod/scehma"
import z from "zod"
import { AddDepartmentAction } from "@/actions/addDepartment"
export default function AddDepartment(){
    const form = useForm<z.infer<typeof AddDepartmentSchema>>({
        resolver:zodResolver(AddDepartmentSchema),
        mode:"onChange"
    })
    const values = form.getValues()
    const MutateAddDepartment = useMutation({
        mutationFn:()=>AddDepartmentAction(values.name,parseInt(values.year))
    })
    return <div className="h-screen w-full flex justify-center items-center">
        
    </div>
}