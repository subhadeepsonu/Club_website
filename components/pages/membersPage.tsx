"use client"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
import { GetAllMembers } from "@/app/Team/[department]/action"
import Loading from "@/app/Team/[department]/loading"
import { useQuery } from "@tanstack/react-query"
import DotPattern from "../magicui/dot-pattern"
import Membercard from "../cards/member"
import axios from "axios"
import { Button } from "../ui/button"
export default function MembersPage(props:any){
    const {data,isError,isLoading} = useQuery({
        queryKey:["members",props.id],
        queryFn:()=>GetAllMembers(parseInt(props.id))
    })
    const user = useQuery({
        queryKey:["user Details"],
        queryFn:async ()=>{
            const resp = await axios.get('/api/user')
            return resp.data
        }
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
                {(()=>{
            if(user.isLoading){
                return <div></div>
            }
            if(user.isError){
                return <div></div>
            }
            if(user){
                if(user.data.message.role=="admin"){
                    console.log(user.data.message)
                    return <Button className="fixed bottom-5 right-5 z-50">Add Member</Button>
                }
                
            }
        })()}
            No Members
            <DotPattern></DotPattern>
        </div>
        }
        return <div className="flex flex-col justify-center items-center pt-16">
            {(()=>{
            if(user.isLoading){
                return <div></div>
            }
            if(user.isError){
                return <div></div>
            }
            if(user){
                if(user.data.message.role=="admin"){
                    console.log(user.data.message)
                    return <Sheet >
                    <SheetTrigger className="z-50 fixed right-5 bottom-5 bg-white rounded-lg"><Button
                    >Add Member</Button></SheetTrigger>
                    <SheetContent className="dark text-white bg-black">
                    <SheetHeader>
                    <SheetTitle className="text-2xl font-bold">Add Member</SheetTitle>
                        <SheetHeader className="font-light text-zinc-400 text-base">Add a member here,Click on save once you are done.</SheetHeader>
                        
                    </SheetHeader>
                    </SheetContent>
                </Sheet>
                }
                
            }
        })()}
            <p className="text-white z-20 text-2xl font-bold lg:text-5xl">{data[0].department.name}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {data.map((member)=>{
                    return <Membercard key={member.id} name={member.name} role={member.role} department={member.department.name} imgurl={member.imgurl}></Membercard>
                })}
            </div>
            <DotPattern></DotPattern>
        </div>
    }
}