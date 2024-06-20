"use client"
import { GetAllMembers } from "@/app/Team/[department]/action"
import Loading from "@/app/Team/[department]/loading"
import { useQuery } from "@tanstack/react-query"
import DotPattern from "../magicui/dot-pattern"
import Membercard from "../cards/member"
export default function MembersPage(props:any){
    const {data,isError,isLoading} = useQuery({
        queryKey:["members"],
        queryFn:()=>GetAllMembers(parseInt(props.id))
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
        return <div className="flex flex-col justify-center items-center pt-28">
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