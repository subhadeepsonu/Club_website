"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";
import  { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export default function Navbar(){
    const r1 = useRef(null)
    const r2 = useRef(null)
    const r3 = useRef(null)
    const r4 = useRef(null)
    const r5 = useRef(null)
    const router = useRouter()
    const path = usePathname()
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
    if(path=="/login"||path=="/signup"){
        return null
    }
    else{
    return <div className="fixed flex justify-center items-center h-16 backdrop-blur-sm w-full bg-transparent top-0 z-50 ">
        <div className="w-full md:w-1/2 h-full text-zinc-300   flex justify-evenly items-center font-medium ">
            <Link ref={r1} href={'/'} className="hover:text-white  ">Home</Link>
            <Link ref={r2} href={'/Team'} className="hover:text-white ">Departments</Link>
            <Link ref={r3} href={'/Events'} className="hover:text-white ">Events</Link>
            <Link ref={r4} href={'/Contact'}className="hover:text-white ">Contact</Link>
            <Button ref={r5} size={"sm"} onClick={()=>{
                    MutateLogOut.mutate()
            }}>Log Out</Button>
        </div>
    </div>}
}