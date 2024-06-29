"use client"
import { EventMembers } from "@/actions/eventMember";
import { useQuery } from "@tanstack/react-query";
import DotPattern from "../magicui/dot-pattern";
import CheckInMember from "../cards/checkInMember";
import { Input } from "../ui/input";

export default function CheckIn(props:any){
    const data = useQuery({
        queryKey:["checkin",props.id.id],
        queryFn: ()=>EventMembers(parseInt(props.id.id))
    })
    if(data.isLoading){
        return <div className="text-white h-screen w-full flex justify-center items-center">
        loading...
        <DotPattern></DotPattern>
            </div>
    }
    if(data.isError){
        return <div className="text-white h-screen w-full flex justify-center items-center">
        Error...
        <DotPattern></DotPattern>
            </div>
    }
    if(data.data){
        if(data.data.registeredEvents.length===0){
            return  <div className="text-white h-screen w-full flex justify-center items-center ">
                <p className="z-20">No Registrations</p>
            <DotPattern></DotPattern>
            </div>
        }
        return <div className="text-white h-screen w-full flex flex-col justify-start items-center pt-20">
            <div className="flex justify-between px-20 items-center w-full h-20 z-20">
                <p className="lg:text-4xl text-2xl font-bold" >CheckIn</p>
                <Input placeholder="Name"  className="w-1/3 bg-black text-white"></Input>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {data.data.registeredEvents.map((users)=>{
            return <CheckInMember key={users.id} eventRegisterid={users.id} name={users.user.name} checkIn={users.checkIn}></CheckInMember>
           })}
           <DotPattern></DotPattern>
            </div>
           

    </div>
    }
    
}