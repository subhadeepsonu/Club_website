"use client"
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CheckIn } from "@/actions/checkIn";
import { toast } from "sonner";
import { VscLoading } from "react-icons/vsc";
export default function CheckInMember(props:any){
    const queryClient = useQueryClient()
    const MutateCheckIn=useMutation({
        mutationFn:()=>CheckIn(props.eventRegisterid,!props.checkIn),
        onSuccess:()=>{
            toast.success("done")
            queryClient.invalidateQueries({queryKey:["checkin"]})
        },
        onError:()=>{
            toast.error("something went wrong")
        }
    })
    return <div className="relative h-20 w-80 border-2 flex flex-col justify-center items-center border-zinc-800 hover:border-cyan-600 duration-200 bg-black z-20 text-white rounded-lg">
        <div className={`${(props.checkIn)?"bg-green-200 border-green-700 text-green-700":"bg-red-200 border-red-700 text-red-700"}  absolute border-2   top-1 rounded-lg  p-1 right-1 text-xs `}>{(props.checkIn)?<TiTick />:<ImCross />}</div>
        <div className="h-full w-full  flex justify-around items-center">
            {props.name}
            <motion.div whileHover={{
                scale:1.05
            }}
            whileTap={{
                scale:0.95,
                rotate:3
            }}
            
            >
            <Button disabled={MutateCheckIn.isPending} onClick={()=>MutateCheckIn.mutate()} className={`${(props.checkIn)?"bg-red-200 text-red-700 border-red-700 hover:bg-red-200":"bg-green-200 text-green-700 border-green-700 hover:bg-gree"} border-2`} size={"sm"}>{(MutateCheckIn.isPending)?<VscLoading className="animate-spin" />:(props.checkIn)?"Check Out":"Check In"}</Button>
            </motion.div>
            </div>
    </div>
}