"use client"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetPortal,
    SheetOverlay
  } from "@/components/ui/sheet"
import { GetAllDepartments } from "@/app/Team/action"
import {  useQuery } from "@tanstack/react-query"
import DotPattern from "../magicui/dot-pattern"
import Loading from "@/app/Team/loading"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import DepartmentCard from "../cards/department"
import { useRecoilState } from "recoil"
import { departmentYearAtom } from "@/store/atoms"
import axios from "axios"
import { Button } from "../ui/button"
import AddDepartment from "../forms/AddDepartment"
export default function DepartmentsPage(){
    const [year,setYear] = useRecoilState(departmentYearAtom)
    const user = useQuery({
        queryKey:["user Details"],
        queryFn:async ()=>{
            const resp = await axios.get('/api/user')
            return resp.data
        }
    })
    const {data,isLoading,isError}= useQuery({
        queryKey:["department",year],
        queryFn:()=>GetAllDepartments(year)
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
        return <div className="min-h-screen w-full flex flex-col justify-start pt-16 items-center text-white z-20">
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
                        >Add Department</Button></SheetTrigger>
                        <SheetContent className="dark text-white bg-black">
                        <SheetHeader>
                        <SheetTitle className="text-2xl font-bold">Add Department</SheetTitle>
                        <SheetHeader className="font-light text-zinc-400 text-base">Add a department here,Click on save once you are done.</SheetHeader>
                        <AddDepartment></AddDepartment>    
                        </SheetHeader>
                        </SheetContent>
                        
                    </Sheet>
                    }
                    
                }
            })()}
            <div className="w-10/12 my-5 h-20  rounded-lg flex justify-between items-center">
                <p className="text-white font-semibold z-20 text-4xl">Departments</p>
                <div className="w-1/2 flex justify-end items-center">
                    <DropdownMenu >
                        <DropdownMenuTrigger className="border-2 border-zinc-700 p-2 rounded-lg bg-black z-20">
                            {year}
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="dark">
                        <DropdownMenuItem onClick={()=>{
                            setYear(2023)
                            
                        }}>
                            2023
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>{
                            setYear(2024)
                            
                        }}
                        >
                            2024
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>{
                            setYear(2025)
                            
                        }}
                        >
                            2025
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>{
                            setYear(2026)
                            
                        }}
                        >
                            2026
                        </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {data.map((department,index)=>{
                    return <DepartmentCard key={index} id={department.id} name={department.name}></DepartmentCard>
                })}
            </div>
            <DotPattern ></DotPattern>
        </div>
    }
}