"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";
import  { usePathname, useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
export default function Navbar(){
    const r1 = useRef(null)
    const r2 = useRef(null)
    const r3 = useRef(null)
    const r4 = useRef(null)
    const r5 = useRef(null)
    const router = useRouter()
    const path = usePathname()
    const {data,isLoading,isError}= useQuery({
        queryKey:['user details'],
        queryFn:async ()=>{
            const response = await axios.get('/api/user')
            return response.data
        },
        staleTime:100000
    })
    const MutateLogOut = useMutation({
        mutationFn: async ()=>{
            const responce = await axios.get('/api/logout')
            return responce.data
        },
        onSettled:(data)=>{
            if(data.success){
                toast.success(data.message)
                router.replace('/login')
            }
            else{
                toast.error(data.message)
            }
        }
    })
    useGSAP(()=>{
        let tl = gsap.timeline()
        tl.from(r1.current,{
            y:-50,
            
            duration:0.3
        })
        tl.from(r2.current,{
            y:-50,
            
            duration:0.3
        })
        tl.from(r3.current,{
            y:-50,
            
            duration:0.3
        })
        tl.from(r4.current,{
            y:-50,
            
            duration:0.3
        })
        tl.from(r5.current,{
            y:-50,
            opacity:0,
            duration:0.3
        })
    })
    if(path=="/login"||path=="/signup" || path=="/adminpanel"){
        return null
    }
    else{
    return <div className="fixed flex justify-center items-center h-16 backdrop-blur-sm w-full bg-transparent top-0 z-50 ">
        <div className="w-full md:w-1/2 h-full text-zinc-300   flex justify-evenly items-center font-medium ">
            <Link ref={r1} href={'/'} className="hover:text-white  ">Home</Link>
            <Link ref={r2} href={'/Team'} className="hover:text-white ">Departments</Link>
            <Link ref={r3} href={'/events'} className="hover:text-white ">Events</Link>
            <Link ref={r4} href={'/contact'}className="hover:text-white ">Contact</Link>
            <DropdownMenu >
                <DropdownMenuTrigger>
                <div ref={r5} className="flex justify-center items-center">
                <div className="p-2 text-cyan-500 font-bold">
                    {(()=>{
                        if(isLoading){
                            return <p>...</p>
                        }
                        else if(isError){
                            return <p>.</p>
                        }
                        else{
                            return <p>{data.message.name}</p>
                        }
                    })()}
                </div>
            <Avatar>
                <AvatarImage src=""></AvatarImage>
                <AvatarFallback>😊</AvatarFallback>
            </Avatar>
            </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="dark cursor-pointer">
                    
                    {(()=>{
                        if(isLoading){
                            return <div>Loading...</div>
                        }
                        else if(isError){
                            return <div> Error</div>
                        }
                        else{
                            console.log(data.message.role)
                            if(data.message.role==="admin"){
                               return <Link href={'/manageevents'}>
                                <DropdownMenuItem className="p-4 cursor-pointer">Manage Events</DropdownMenuItem>
                                </Link>
                            }
                            else{
                                return null
                            }
                        }
                    })()}
                    <Link href={'/registeredevents'}>
                    <DropdownMenuItem className="p-4 cursor-pointer">
                        Registered Events
                    </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem className="flex justify-center items-center cursor-pointer"><Button size={"sm"} onClick={()=>{
                        MutateLogOut.mutate()
                    }}>Log Out</Button></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </div>}
}