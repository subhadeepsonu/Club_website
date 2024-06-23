import { GEtAllEvents } from "@/actions/Allevents"
import { useQuery } from "@tanstack/react-query"
import DotPattern from "../magicui/dot-pattern"
import AdminEventCard from "../admin/event"

export default function AdminPanel(){
    const {data,isLoading,isError}:any = useQuery({
        queryKey:["all events"],
        queryFn:()=>GEtAllEvents()
    })
    if(isLoading){
        return <div className="h-screen w-full text-white flex justify-center items-center ">
            Loading...
        </div>
    }
    if(isError){
        return <div className="h-screen w-full text-white flex justify-center items-center ">
        Something Wen Wrong
    </div>
    }
    return <div className="min-h-screen w-full flex  justify-center items-center text-white pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">

        
        {data.map((event:any,index:number)=>{
            return <AdminEventCard isOpen={event.isOpen} imgurl={event.imgurl} name={event.name}></AdminEventCard>
        })}
        </div>
        <DotPattern></DotPattern>
    </div>
}