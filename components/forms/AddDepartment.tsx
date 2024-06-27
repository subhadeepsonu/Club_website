"use client"
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AddDepartmentSchema } from "@/zod/scehma"
import z from "zod"
import { AddDepartmentAction } from "@/actions/addDepartment"
import { Form } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { toast } from "sonner"
import { SheetClose } from "../ui/sheet"
export default function AddDepartment(){
    const queryClient = useQueryClient()
    const form = useForm<z.infer<typeof AddDepartmentSchema>>({
        resolver:zodResolver(AddDepartmentSchema),
        mode:"onChange"
    })
    const values = form.getValues()
    const MutateAddDepartment = useMutation({
        mutationFn:()=>AddDepartmentAction(values.name,parseInt(values.year)),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["department"]})
            toast.success("Department Added")
        },
        onError:()=>{
            toast.error("Something went wrong")
        }
    })
    return <div className="h-screen w-full flex justify-center items-center">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(()=>{
                MutateAddDepartment.mutate()
            })} className="flex flex-col w-full h-[30vh] justify-around items-center" >
            <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input  placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={form.control}
          name="year"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Year</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Year" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SheetClose asChild>
        <Button  type="submit">Done</Button>
        </SheetClose>
            </form>
        </Form>
    </div>
}