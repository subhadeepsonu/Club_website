"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AddEventSchema } from "@/zod/scehma"
import z from "zod"
import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AddEventAction } from "@/actions/addEvent"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { toast } from "sonner"
export default function AddEvent(){
    const [imgurl,setImgurl] = useState("")
    const queryClient = useQueryClient()
    const form = useForm<z.infer<typeof AddEventSchema>>({
        resolver: zodResolver(AddEventSchema),
        mode:"onChange"
    })
  
    const values = form.getValues()
    const MutateAddEvent = useMutation({
        mutationFn:()=>AddEventAction(values.date,values.description,imgurl,values.location,values.name,parseInt(values.year)),
        onSuccess:()=>{
          queryClient.invalidateQueries({queryKey:[]})
            toast.success("Event added succefully")
        },
        onError:()=>{
          toast.error("Something went wrong")
        }
    })
    return <div className="min-h-screen w-full flex flex-col justify-center items-center">
       <Input type="file" placeholder="Uplaod an image" className="cursor-pointer" onChange={ async (e)=>{
          const files = e.target.files
          const data = new FormData()
          if(files){
          data.append("file",files[0])
          data.append("upload_preset","GFGVITAP")
          const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,{
            method:"POST",
            body:data
          })
          const file = await res.json()
          setImgurl(file.secure_url)
        }
       }}></Input>
        <Form {...form}>
            <form className="w-full flex flex-col justify-around" onSubmit={form.handleSubmit(()=>MutateAddEvent.mutate())} >
           
         <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input type="" placeholder="Location" {...field} />
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
                <Input placeholder="2024.." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input placeholder="Include Year" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Discription</FormLabel>
              <FormControl>
                <Textarea placeholder="Discription" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
            <Button disabled={imgurl.length==0} type="submit">Done</Button>
            {(imgurl.length==0)?<p className="text-red-500 flex justify-center items-center pb-10">Please upload image</p>:""}
            </form>
        </Form>
    </div>
}