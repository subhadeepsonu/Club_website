"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";

export default function Navbar(){
    const r1 = useRef(null)
    const r2 = useRef(null)
    const r3 = useRef(null)
    const r4 = useRef(null)
    useGSAP(()=>{
        let tl = gsap.timeline()
        tl.from(r1.current,{
            y:-50,
            
            duration:0.5
        })
        tl.from(r2.current,{
            y:-50,
            
            duration:0.5
        })
        tl.from(r3.current,{
            y:-50,
            
            duration:0.5
        })
        tl.from(r4.current,{
            y:-50,
            
            duration:0.5
        })
    })
    return <div className="fixed flex justify-center items-center h-16 backdrop-blur-sm w-full bg-transparent top-0 z-50 ">
        <div className="w-full md:w-1/2 h-full text-zinc-300   flex justify-evenly items-center font-medium ">
            <Link ref={r1} href={'/'} className="hover:text-white  ">Home</Link>
            <Link ref={r2} href={'/Team'} className="hover:text-white ">Departments</Link>
            <Link ref={r3} href={'/Events'} className="hover:text-white ">Events</Link>
            <Link ref={r4} href={'/Contact'}className="hover:text-white ">Contact</Link>
        </div>
    </div>
}