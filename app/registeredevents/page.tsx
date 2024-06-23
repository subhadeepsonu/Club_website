"use client"
import EventRegister from "@/components/cards/eventRegister";
import RegisteredEventsCard from "@/components/cards/registeredEventsCard";
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
    return <div className="flex justify-center flex-col items-center min-h-screen w-full text-white text-center pt-20">
        <p className="mb-10 text-2xl font-bold z-20 lg:text-4xl">Registered Events</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.message.map((event:any,index:number)=>{
           return <RegisteredEventsCard imgurl={event.event.imgurl} name={event.event.name} key={index}></RegisteredEventsCard>
        })}
        </div>
        <DotPattern></DotPattern>
    </div>
}