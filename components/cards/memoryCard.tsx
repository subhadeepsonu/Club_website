"use client"
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
export default function MemoryCard(){
    return <motion.div initial={{
        y:300,
        opacity:0,
    }}
    whileInView={{
        opacity:1,
        startOffset:1,
        rotate:5,
        y:0
    }}
    transition={{
        duration:0.5
    }}
    className="h-80 w-80 bg-white rounded-lg flex-shrink-0 mx-28 flex justify-center items-center">
        <div className="rounded-lg  border-2 border-black h-72 w-72  ">
        <CldImage deliveryType="fetch" className="object-cover h-full w-full" src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg" alt="image" height={288} width={288}></CldImage>
        </div>
    </motion.div>
}