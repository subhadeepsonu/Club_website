"use client"
import DotPattern from "@/components/magicui/dot-pattern";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import z from "zod"
import { LoginSchema } from "@/zod/scehma";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios"
import Link from "next/link";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { VscLoading } from "react-icons/vsc";
export default function Login(){
  const queryClient = useQueryClient()
    const form  = useForm<z.infer<typeof LoginSchema>>({
        resolver:zodResolver(LoginSchema),
        mode:"onChange",
        defaultValues:{
            email:"",
            password:""
        }
    })
    const router = useRouter()
    const value = form.getValues()
    const MutateLogin = useMutation({
        mutationFn: async ()=>{
            try {
                const responce = await axios.post('/api/login',{
                    email:value.email,
                    password:value.password
                })
                console.log(responce)
                return responce.data
            } catch (error) {
                throw new Error("error")
            }
            
        },
        onSuccess:(data)=>{ 
                 if(data.success){
                    queryClient.invalidateQueries({queryKey:[]})
                    toast.success(`${data.message}`)
                    router.replace('/')
                 }
                 else{
                    toast.error(`${data.message}`)
                 }
        }
    },
    )    
    return <motion.div 
    initial={{
        opacity:0
    }}
    animate={{
        opacity:1
    }}
    className="h-screen w-full text-white flex   justify-center items-center ">
        <Form {...form} >
            <form onSubmit={form.handleSubmit(()=>{
                 return MutateLogin.mutate()
                 })} className="bg-black z-20 h-96 w-80 rounded-lg flex flex-col justify-evenly items-center border-2 border-zinc-800">
                <p className="font-bold text-2xl">Login</p>
            <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col justify-center items-center text-sm">
            <div className="flex justify-center items-center m-2">
        <p className="p-2">Not a User?</p>
        <Link href={'/signup'}>Sign up</Link>
        </div>
        <Button disabled={MutateLogin.isPending} type="submit"  >
            {(MutateLogin.isPending) ? <VscLoading className="animate-spin" /> : "Log In"}
            </Button>
        </div>
            </form>
        </Form>
        <DotPattern></DotPattern>
    </motion.div>
}