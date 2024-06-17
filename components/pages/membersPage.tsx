"use client"
import { GetAllMembers } from "@/app/Team/[department]/action"
import Loading from "@/app/Team/[department]/loading"
import { useQuery } from "@tanstack/react-query"
import DotPattern from "../magicui/dot-pattern"
import Membercard from "../cards/member"
export default function MembersPage(){
    const {data,isError,isLoading} = useQuery({
        queryKey:["members"],
        queryFn:()=>GetAllMembers()
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
            No Members
            <DotPattern></DotPattern>
        </div>
        }
        return <div className="flex justify-center items-center pt-28">
            <div className="grid grid-cols-3">
                {data.map((member)=>{
                    return <Membercard name={member.name} role={member.role} department={member.departmentName}></Membercard>
                })}
            </div>
            <DotPattern></DotPattern>
        </div>
    }
}