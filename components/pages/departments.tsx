"use client"
import { GetAllDepartments } from "@/app/Team/action"
import { useQuery } from "@tanstack/react-query"
import DotPattern from "../magicui/dot-pattern"
import Loading from "@/app/Team/loading"
import { Input } from "../ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import DepartmentCard from "../cards/department"
import { FilterIcon } from "lucide-react"
export default function DepartmentsPage(){
    const {data,isLoading,isError}= useQuery({
        queryKey:["department"],
        queryFn:()=>GetAllDepartments()
    })
    if(isLoading){
        return <Loading></Loading>
    }
    if(isError){
        return <div className="h-screen w-full flex justify-center items-center text-white z-20">
            Something went wrong
            <DotPattern></DotPattern>
        </div>
    }
    if(data){
        if(data.length==0){
            return <div className="h-screen w-full flex justify-center items-center text-white z-20">
                <p className="z-20 text-2xl">No Departments</p>
                <DotPattern></DotPattern>
            </div>
        }
        return <div className="min-h-screen w-full flex flex-col justify-center items-center text-white z-20">
            <div className="w-10/12 my-5 h-20  rounded-lg flex justify-between items-center">
                <p className="text-white font-semibold z-20 text-4xl">Departments</p>
                <div className="w-1/2 flex justify-around items-center">
                    <Input placeholder="Department Name" className="z-20 text-white w-5/6 bg-black border-2 border-zinc-700"></Input>
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
            <div className="grid grid-cols-4 gap-5">
                {data.map((department)=>{
                    return <DepartmentCard name={department.name}></DepartmentCard>
                })}
            </div>
            <DotPattern ></DotPattern>
        </div>
    }
}