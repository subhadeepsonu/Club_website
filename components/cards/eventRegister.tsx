"use client"
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { CiLocationOn } from "react-icons/ci";
import { Button } from "../ui/button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { VscLoading } from "react-icons/vsc";
export default function EventRegister(props:any){
    const queryClient = useQueryClient()
    const {data,isLoading,isError}= useQuery({
        queryKey:['user details'],
        queryFn:async ()=>{
            const response = await axios.get('/api/user')
            console.log(response)
            return response.data
        }
    })
    const check = props.registered.filter((event:any)=> event.userid==data.id)
    const MutateRegister = useMutation({
         mutationFn: async ()=>{
            const responce = await axios.post('/api/register',{
                   userid:data.message.id,
                    eventid:props.id
        })
                    return responce.data
                },
                onSettled:(data)=>{
                    if(data.success){
                        toast.success(data.message)
                        queryClient.invalidateQueries({queryKey:["events"]})
                    }
                    else{
                        toast.error(data.message)
                    }
                }
        })
        if(isLoading){
            return <div>
                loading
            </div>
        }
        if(isError){
            return <div>
                error
            </div>
        }
        else{
            const check = props.registered.filter((event:any)=> event.userid==data.message.id)
            console.log(data.message.id)
            return <motion.div initial={{
                opacity:0
            }}
            animate={{
                opacity:1,
                
            }}
            transition={{
                duration:0.5
            }}
            className="bg-black lg:w-[45vw] mb-5  z-20 min-h-72 sm:min-h-64 relative  dark:hover:border-cyan-600  rounded-lg flex flex-col dark:text-white items-center sm:flex-row border-2 dark:border-zinc-800 hover:border-zinc-400 shadow-sm hover:shadow-lg duration-200 transition-all">
                <div className="h-4/5 w-11/12 sm:h-64 m-2 sm:w-1/3  bg-black rounded-lg ">
                    <img className="object-cover h-full w-full" src={props.image}></img>
                </div>
                <div className="sm:h-full h-1/5  flex flex-col justify-start items-start w-full sm:w-2/3">
                    <div className="hidden h-full w-full ml-2 sm:h-1/4 font-bold text-lg sm:text-2xl sm:flex justify-start items-center">
                        {props.title}
                    </div>
                    <div className=" h-1/2 hidden w-full font-light sm:flex justify-start text-sm items-center text-ellipsis ">
                        {props.description}
                    </div>
                    <div className=" h-full sm:h-1/4 w-full flex items-center justify-between   px-5   ">
                        <div className="flex items-center justify-center font-semibold  ">
                        <Calendar className="pr-2 h-7 w-7"></Calendar>{props.date}
                        </div>
                        <div className="flex items-center font-semibold ">
                        <CiLocationOn className="h-6 w-6" />{props.location}
                        </div>
                        {(check.length==0) ? <Button disabled={MutateRegister.isPending} size={"sm"} onClick={()=>{
                            MutateRegister.mutate()
                        }}>{(MutateRegister.isPending)?<VscLoading className="animate-spin" />: "Register"}</Button> :<Button size={"sm"} disabled>Registered</Button>}  
                    </div>
                </div>
                    
            </motion.div>
        }
}