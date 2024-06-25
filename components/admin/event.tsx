"use client"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "../ui/button";
import { ChangeEventState } from "@/actions/ChangeEventState";
import { toast } from "sonner";
import { VscLoading } from "react-icons/vsc";
import { motion } from "framer-motion";
import { redirect, useRouter } from "next/navigation";
export default function AdminEventCard(props:any){
    const router = useRouter()
    const queryClient = useQueryClient()
    const MutateIsOpen = useMutation({
        mutationFn:()=> ChangeEventState(props.id,!props.isOpen),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["adminevents"]})
            toast.success("Done")
        },
        onError:()=>{
            toast.error("Something went wrong")
        }
    },
)
    return <motion.div initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1,
        
    }}
    className="h-80 w-80 cursor-pointer relative bg-black flex flex-col justify-between duration-200 items-center rounded-lg border-2 border-zinc-800 z-20 hover:border-cyan-600 hover:border-2">
        
        <div className={`h-8 w-20 absolute left-1 top-1 ${(props.isOpen)?'bg-green-200 text-green-700 border-green-600':'bg-red-200 text-red-700 border-red-600'}   font-semibold border-2   rounded-lg flex justify-center items-center`}>
            {(props.isOpen)?"Open":"Closed"}
        </div>
        
    <div className="w-full h-56 flex justify-center items-center  bg-black rounded-t-lg  ">
        <img src={props.imgurl} alt="photo" className="h-56 w-80 object-cover rounded-t-lg">

        </img>
    </div>
    
    <div className="w-full h-12  font-semibold flex justify-center items-center bg-black rounded-b-lg">
            {props.name}
    </div>
    <div className="w-full h-12 flex justify-around items-center">
    <Button  disabled={MutateIsOpen.isPending}  size={"sm"} onClick={()=>{
        MutateIsOpen.mutate()
    }}>{(MutateIsOpen.isPending)?<VscLoading className="animate-spin" />:`${(props.isOpen)?"Close ":"Open"}`}</Button>
    <Button size={"sm"} variant={"link"} onClick={()=>{
        router.push(`/manageevents/${props.id}`)
    }}>{"Handle Checkins ->"}</Button>
    </div>
</motion.div>
}