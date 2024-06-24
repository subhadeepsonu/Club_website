"use client"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "../ui/button";
import { ChangeEventState } from "@/actions/ChangeEventState";
import { toast } from "sonner";
import { VscLoading } from "react-icons/vsc";
import { motion } from "framer-motion";
export default function AdminEventCard(props:any){
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
    viewport={{
        once:true
    }}
    className="h-80 w-80 relative bg-black flex flex-col justify-between duration-200 items-center rounded-lg border-2 border-zinc-800 z-20 hover:border-cyan-600 hover:border-2">
        <div className={`h-8 w-20 absolute left-1 top-1 ${(props.isOpen)?'bg-green-200 text-green-700 border-green-600':'bg-red-200 text-red-700 border-red-600'}   font-semibold border-2   rounded-lg flex justify-center items-center`}>
            {(props.isOpen)?"Open":"Closed"}
        </div>
    <div className="w-full h-56 flex justify-center items-center  bg-black rounded-t-lg  ">
        <img src={props.imgurl} alt="photo" className="h-56 w-80 object-cover rounded-t-lg">

        </img>
    </div>
    <div className="flex justify-between px-2 items-center h-24 w-full">
    <div className="w-3/4 h-full  font-semibold flex justify-start items-center bg-black rounded-b-lg">
            {props.name}
    </div>
    <Button disabled={MutateIsOpen.isPending}  size={"sm"} onClick={()=>{
        MutateIsOpen.mutate()
    }}>{(MutateIsOpen.isPending)?<VscLoading className="animate-spin" />:`${(props.isOpen)?"Close ":"Open"}`}</Button>
    </div>
</motion.div>
}