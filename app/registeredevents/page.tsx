"use client"
import EventRegister from "@/components/cards/eventRegister";
import DotPattern from "@/components/magicui/dot-pattern";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function RegisteredEvents(){
    const {data,isLoading,isError}=useQuery({
        queryKey:["registered events  user"],
        queryFn: async()=>{
            const responce  = await axios.get('/api/register')
            console.log(responce.data)
            return responce.data
        }
    })
    if(isLoading){
        return  <div className="flex justify-center  items-center h-screen w-full text-white">
            loading...
            <DotPattern></DotPattern>
        </div>
    }
    else if(isError){
        return <div className="flex justify-center  items-center h-screen w-full text-white">
            Something went wrong
        </div>
    }
    return <div className="flex justify-center flex-col items-center min-h-screen w-full text-white text-center pt-28">
        {data.message.map((event:any)=>{
           return <div className="flex justify-center items-center p-4 w-full h-30">
            {JSON.stringify(event)}
           </div>
        })}
        <DotPattern></DotPattern>
    </div>
}