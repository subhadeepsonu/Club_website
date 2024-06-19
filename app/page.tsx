"use client"
import Hero from "@/components/homepage/Hero";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
export default function Home() {
  const [xscale,setXscale] = useState(0)
  const [yscale,setYscale] = useState(0)
  const r1 = useRef(null)
  const r2 = useRef(null)
  useGSAP(()=>{
    gsap.to(r2.current,{
      x:xscale,
      y:yscale,
      duration:0.5,
      ease:"back.out"
    })
  },[xscale,yscale])
  return (
   <div ref={r1}  onMouseMove={(e)=>{
    setXscale(e.clientX)
    setYscale(e.clientY)
}} className=" bg-black  w-full">
    <div ref={r2} className="fixed h-12 w-12 rounded-full bg-white z-50"></div>
    <Hero></Hero>
    
   
    
   </div>
  );
}
