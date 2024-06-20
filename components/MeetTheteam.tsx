"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import ScrollTrigger from "gsap/ScrollTrigger"; 
gsap.registerPlugin(ScrollTrigger)
export default function MeetTheTeam(){
    const r1 = useRef(null)
    useGSAP(()=>{
        gsap.to(r1.current,{
            transform:"translateX(-105%)",
            delay:1,
            duration:10,
            scrollTrigger:{
                trigger:r1.current,
                start:"top 0%",
                end:"top -600%",
                scrub:2,
                pin:true
            }
        })
    })
    return <div  className="min-h-screen w-full bg-black flex justify-around items-center overflow-x-hidden ">
        <div className=" flex flex-col justify-center items-center">
        <div ref={r1} className="h-screen flex bg-black items-center  ">
        <p className="text-[20vw] flex-shrink-0 text-white mx-28">MEET THE TEAM</p>
        <div className="h-96 w-96 bg-red-300 flex-shrink-0 mx-28">

        </div>
        <div className="h-96 w-96 bg-red-300 flex-shrink-0 mx-28">

        </div>
        <div className="h-96 w-96 bg-red-300 flex-shrink-0 mx-28">

        </div>

        <div className="h-96 w-96 bg-red-300 flex-shrink-0 mx-28">

        </div>
        <div className="h-96 w-96 bg-red-300 flex-shrink-0 mx-28">

        </div>
        <div className="h-96 w-96 bg-red-300 flex-shrink-0 mx-28">

        </div>
        <div className="h-96 w-96 bg-red-300 flex-shrink-0 mx-28">

        </div>
        <div className="h-96 w-96 bg-red-300 flex-shrink-0 mx-28">

        </div>
        <div className="h-96 w-96 bg-red-300 flex-shrink-0 mx-28">

        </div>
        <div className="h-96 w-96 bg-red-300 flex-shrink-0 mx-28">

        </div>
        <div className="h-96 w-96 bg-red-300 flex-shrink-0 mx-28">

        </div>
        <div className="h-96 w-96 bg-red-300 flex-shrink-0 mx-28">

        </div>
        <div className="h-96 w-96 bg-red-300 flex-shrink-0 mx-28">

        </div>
        <div className="h-96 w-96 bg-red-300 flex-shrink-0 mx-28">

        </div>
        </div>
        <div className="h-[600vh]">

        </div>
        </div>
        {/* <div className="h-[200vh]">

        </div> */}
    </div>
}