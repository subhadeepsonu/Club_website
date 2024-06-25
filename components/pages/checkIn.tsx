"use client"
import { EventMembers } from "@/actions/eventMember";
import { useQuery } from "@tanstack/react-query";

export default function CheckIn(props:any){
    const data = useQuery({
        queryKey:["checkin",props.id.id],
        queryFn: ()=>EventMembers(parseInt(props.id.id))
    })
    if(data.isLoading){
        return <div className="text-white h-screen w-full flex justify-center items-center">
        loading...
            </div>
    }
    if(data.isError){
        return <div className="text-white h-screen w-full flex justify-center items-center">
        Error...
            </div>
    }
    if(data.data){
        if(data.data.registeredEvents.length===0){
            return  <div className="text-white h-screen w-full flex justify-center items-center">No Registrations</div>
        }
        return <div className="text-white h-screen w-full flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.data.registeredEvents.map((users)=>{
            return <div className="h-20 w-80">
                {JSON.stringify(users.user)}
            </div>
           })}
            </div>
           

    </div>
    }
    
}