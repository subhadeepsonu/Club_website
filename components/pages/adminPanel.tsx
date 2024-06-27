import { GEtAllEvents } from "@/actions/Allevents"
import { useQuery } from "@tanstack/react-query"
import DotPattern from "../magicui/dot-pattern"
import AdminEventCard from "../admin/event"

export default function AdminPanel(){
    const {data,isLoading,isError} = useQuery({
        queryKey:["adminevents"],
        queryFn:()=>GEtAllEvents()
    })
    console.log(data)
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
    return <div className="min-h-screen w-full flex flex-col  justify-center items-center text-white pt-16">
        <p className="p-10 text-2xl lg:text-4xl font-bold z-20">Manage Events</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
        {data!.map((event,index:number)=>{
            return <AdminEventCard key={index} id={event.id} isOpen={event.isOpen} imgurl={event.imgurl} name={event.name}></AdminEventCard>
        })}
        </div>
        <DotPattern></DotPattern>
    </div>
}