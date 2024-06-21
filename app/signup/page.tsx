"use client"
import DotPattern from "@/components/magicui/dot-pattern";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignUpSchema } from "@/zod/scehma";
import { useForm } from "react-hook-form";
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { VscLoading } from "react-icons/vsc";
export default function Signup(){
    const form = useForm<z.infer<typeof SignUpSchema>>({
            resolver:zodResolver(SignUpSchema),
            mode:"onChange",
            defaultValues:{
                email:"",
                name:"",
                password:""
            }
        })
    const values = form.getValues()
    const router = useRouter()
    const MutateSignUp = useMutation({
        mutationFn: async ()=>{
            const responce = await axios.post('/api/signup',{
                email:values.email,
                name:values.name,
                password:values.password
            })
            return responce.data
            
        },
        onSuccess:(data)=>{
            if(data.success){
                toast.success(`${data.message}`)
                router.replace('/')
            }
            else{
                toast.error(`${data.message}`)
            }
        }
    })
    return <motion.div
    initial={{
        opacity:0
    }}
    animate={{
        opacity:1
    }}
    className="h-screen w-full flex justify-center items-center text-white">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(()=>{
                MutateSignUp.mutate()
            })} className="bg-black z-20 h-96 w-80 flex flex-col justify-evenly items-center rounded-lg border-2 border-zinc-800">
                <p className="text-2xl font-bold">Sign Up</p>
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
        <div className="flex justify-between items-center text-sm">
            <p className="p-2">Already a User?</p><Link href="/login">Log in</Link>
        </div>
        <Button disabled={MutateSignUp.isPending} type="submit" size={"sm"}>
            {(MutateSignUp.isPending)?  <VscLoading className="animate-spin" /> :"Sign Up"}
        </Button>
            </form>
        </Form>
        <DotPattern></DotPattern>
    </motion.div>
}