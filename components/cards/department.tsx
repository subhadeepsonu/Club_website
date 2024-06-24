"use client"
import { motion } from "framer-motion";
import Link from "next/link";
export default function DepartmentCard(props:any){
    return <Link className="bg-black z-20" href={`/Team/${props.id}`}>
    <motion.div 
    initial={{
        scale:0
    }}
    whileInView={{
        scale:1
    }}
    // viewport={{
    //     once:true
    // }}
    className="text-white   flex  justify-center items-center hover:border-cyan-600 w-80 h-40   rounded-lg border-2 border-zinc-800 hover:scale-105 duration-150 transition-all  ">
        {props.name}
    </motion.div>
    </Link>
}