"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AddEventSchema } from "@/zod/scehma"
import z from "zod"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { AddEventAction } from "@/actions/addEvent"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { toast } from "sonner"
import { CldUploadButton, CldUploadWidget, getCldImageUrl } from "next-cloudinary"
export default function AddEvent(){
    const [imgurl,setImgurl] = useState("")
    const form = useForm<z.infer<typeof AddEventSchema>>({
        resolver: zodResolver(AddEventSchema)
    })
    const values = form.getValues()
    const MutateAddEvent = useMutation({
        mutationFn:()=>AddEventAction(values.date,values.description,imgurl,values.location,values.name,parseInt(values.year)),
        onSuccess:()=>{
            toast.success("Done")
        }
    })
    return <div className="min-h-screen w-full flex flex-col justify-center items-center">
      {/* <Input type="file" onChange={(e)=>{
        
        
      }}></Input> */}
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
                <Input type="file" placeholder="Location" {...field} />
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
            <FormItem>
              <FormLabel>Discription</FormLabel>
              <FormControl>
                <Textarea placeholder="Discription" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
            <Button type="submit">Done</Button>
            </form>
        </Form>
    </div>
}