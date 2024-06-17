"use client"
import { GetAllEvents } from "@/app/Events/action"
import Loading from "@/app/Events/loading"
import { useQuery } from "@tanstack/react-query"
import EventRegister from "../cards/eventRegister"
import DotPattern from "../magicui/dot-pattern"
import { Input } from "../ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { FilterIcon } from "lucide-react"
export default function EventsPage(){
    const {data,isLoading,isError}= useQuery({
        queryKey:["Events"],
        queryFn:()=> GetAllEvents()
    })
    if(isLoading){
        return <Loading></Loading>
    }
    if(isError){
        return <div className="h-screen w-full flex justify-center items-center text-white">
        Something Went Wrong
        <DotPattern></DotPattern>
    </div>
    }
    if(data){
        if(data.length==0){
            return <div className="h-screen w-full flex justify-center items-center text-white">
                No Events
                <DotPattern></DotPattern>
            </div>
        }
        return <div className="min-h-screen w-full flex flex-col justify-center items-center pt-28 ">
            <div className="w-10/12 my-5 h-20  rounded-lg flex justify-between items-center">
                <p className="text-white font-semibold z-20 text-4xl">Events</p>
                <div className="w-1/2 flex justify-around items-center">
                    <Input placeholder="Event Name" className="z-20 text-white w-5/6 bg-black border-2 border-zinc-700"></Input>
                    <DropdownMenu >
                        <DropdownMenuTrigger>
                            <FilterIcon className="text-zinc-200"></FilterIcon>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                        <DropdownMenuItem>
                            haha
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            haha
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            haha
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            haha
                        </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <div className="flex justify-center items-center w-full">
            <div className=" w-11/12 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {data.map((event)=>{
                return <EventRegister></EventRegister>
            })}
            <DotPattern></DotPattern>
            </div>
            </div>
        </div>
    }
}