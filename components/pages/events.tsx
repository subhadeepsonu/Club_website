"use client"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
import { GetAllEvents } from "@/app/events/action"
import Loading from "@/app/events/loading"
import { useQuery } from "@tanstack/react-query"
import EventRegister from "../cards/eventRegister"
import DotPattern from "../magicui/dot-pattern"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { useRecoilState,  } from "recoil"
import {  eventYearAtom } from "@/store/atoms"
import axios from "axios"
import { Button } from "../ui/button"
import AddEvent from "../forms/AddEvent"
export default function EventsPage(){
    const [year,setYear] = useRecoilState(eventYearAtom)
    const user = useQuery({
        queryKey:["user Details"],
        queryFn:async ()=>{
            const resp = await axios.get('/api/user')
            return resp.data
        }
    })
    const {data,isLoading,isError}= useQuery({
        queryKey:["events",year],
        queryFn:()=> GetAllEvents(year),
        
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
        return <div className="min-h-screen w-full flex flex-col justify-start items-center pt-16 ">
            {(()=>{
                if(user.isLoading){
                    return <div></div>
                }
                if(user.isError){
                    return <div></div>
                }
                if(user){
                    if(user.data.message.role=="admin"){
                        return <Sheet >
                        <SheetTrigger className="z-50 fixed right-5 bottom-5 bg-white rounded-lg"><Button
                        >Add Event</Button></SheetTrigger>
                        <SheetContent className="dark  text-white bg-black ">
                        <SheetHeader>
                        <SheetTitle className="text-2xl font-bold">Add Event</SheetTitle>
                        <SheetHeader className="font-light text-zinc-400 text-base">Add a event here,Click on save once you are done.</SheetHeader>
                        
                        <AddEvent></AddEvent>    
                        
                        </SheetHeader>
                        </SheetContent>
                    </Sheet>
                    }
                    
                }
            })()}
            <div className="w-10/12 my-5 h-20  rounded-lg flex justify-between items-center">
                <p className="text-white font-semibold z-20 text-4xl">Events</p>
                <div className="w-1/2 flex justify-end items-center">
                    
                    <DropdownMenu >
                        <DropdownMenuTrigger className="bg-black p-2 rounded-lg text-white border-2 border-zinc-700">
                            {year}
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="dark">
                        <DropdownMenuItem 
                        onClick={()=>{
                            setYear(2023)
                            
                        }}
                        >         
                        2023                 
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>{
                            setYear(2024)
                            
                        }}>
                            2024
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>{
                            setYear(2025)
                            
                        }}>
                            2025
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>{
                            setYear(2026)
                            
                        }}>
                            2026
                        </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <div className="flex justify-center items-center w-full">
            <div className=" w-11/12 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {data.map((event,index:number)=>{
                return <EventRegister id={event.id} registered={event.registeredEvents} title={event.name} image={event.imgurl} location={event.location} description={event.description} date = {event.date} year={event.year} key={index}></EventRegister>
            })}
            <DotPattern></DotPattern>
            </div>
            </div>
        </div>
    }
}