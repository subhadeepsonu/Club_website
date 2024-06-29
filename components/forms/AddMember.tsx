import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {  AddMemberSchema } from "@/zod/scehma"
import z from 'zod'
import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AddMemberAction } from "@/actions/addMembers"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { toast } from "sonner"
export default function AddMember(props:{
    id:number
}){
    const queryClient = useQueryClient()
    const [imgurl,setImgurl] = useState("")
    const form = useForm<z.infer<typeof AddMemberSchema>>({
        resolver:zodResolver(AddMemberSchema),
        mode:"onChange"
    })
    const values = form.getValues()
    const MutateAddMember = useMutation({
        mutationFn:()=>AddMemberAction(imgurl,values.name,props.id,values.git,values.linkedin),
        onSuccess:()=>{
            toast.success("Added member succesfully")
            queryClient.invalidateQueries({queryKey:["members"]})
        },
        onError:()=>{
            toast.error("Unable to add member")
        }
    })
    return <div className="h-screen w-full flex flex-col justify-center items-center">
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
            <form onSubmit={form.handleSubmit(()=>{
                MutateAddMember.mutate()
            })} className="w-full" >
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
          name="git"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Github</FormLabel>
              <FormControl>
                <Input placeholder="Github" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="linkedin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Linkedin</FormLabel>
              <FormControl>
                <Input placeholder="Linkedin" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={MutateAddMember.isPending  || imgurl.length===0} className="w-full mt-2" type="submit">Done</Button>
        <p>{(imgurl.length===0)?<p className="text-red-500 text-center">Please upload image</p>:""}</p>
            </form>
        </Form>
    </div>
}