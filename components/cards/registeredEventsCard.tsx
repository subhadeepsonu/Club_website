"use client"
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useMutation } from "@tanstack/react-query";
import { sendEmail } from "@/utils/mailer";
import { toast } from "sonner";
export default function RegisteredEventsCard(props:any){
    const MutateMail = useMutation({
        mutationFn:()=>sendEmail(props.email,props.username),
        onSuccess:()=>{
            toast.success("Mail sent")
        },
        onError:()=>{
            toast.error("Something went wrong")
        }
    })
            return <motion.div initial={{ 
                opacity:0
            }} 
            whileInView={{
                
                opacity:1
            }}
            transition={{
                
                ease:"easeInOut"
            }}
            
            className="h-96 w-80 bg-black flex flex-col justify-between duration-200 items-center rounded-lg border-2 border-zinc-800 z-20 hover:border-cyan-600 hover:border-2">
                <div className="w-full h-72 flex justify-center items-center  bg-black rounded-t-lg  ">
                    <img src={props.imgurl} alt="photo" className="h-72 w-80 object-cover rounded-t-lg">

                    </img>
                </div>
                <div className="w-full h-24 text-xl font-semibold flex justify-around items-center bg-black rounded-b-lg">
                       <div className="w-1/2 text-lg"> {props.name}</div>
                        {(props.checkIn)?<Button disabled={MutateMail.isPending} size={"sm"} onClick={()=>MutateMail.mutate()}  className="">Mail certificate</Button>:<div className="text-sm  bg-red-200 p-1 rounded-lg text-red-700 border-red-700 border-2">Not checked In</div>}
                </div>
            </motion.div>
}