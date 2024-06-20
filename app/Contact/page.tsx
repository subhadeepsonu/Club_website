"use client"
import DotPattern from "@/components/magicui/dot-pattern";
import { motion } from "framer-motion";
import { FaGithub, FaInstagramSquare, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Contact(){
    return <div className="flex flex-col justify-center items-center h-screen w-full">
        <motion.h2 
        initial={{
          opacity:0
        }}
        animate={{
          opacity:1
        }}
        transition={{
          duration:0.5
        }}
        className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent z-20 text-2xl md:text-6xl font-semibold text-center">
          Want to Contact Us?
        </motion.h2>
        <div className="text-white w-full h-32 flex justify-center items-center z-20">
            <motion.div initial={{
              scale:2
            }} 
            animate={{
              scale:1
            }}
            transition={{
              duration:0.5
            }}
            className="w-1/2 md:w-1/3 flex justify-around items-center">
            <a target="_blank"  href={"https://www.linkedin.com/company/geeks-for-geeks-vitap/"}>
            <FaLinkedin className="h-7 w-7 md:w-9 md:h-9 hover:scale-110 duration-150 transition-all hover:cursor-pointer hover:text-cyan-600" />
            </a>
        <a target="_blank" href={"https://github.com/GFGVITAP"}>
        <FaGithub className="h-7 w-7 md:w-9 md:h-9 hover:scale-110 duration-150 transition-all hover:cursor-pointer hover:text-cyan-600" />
        </a>
        <a target="_blank" href={"https://www.instagram.com/geeksforgeeks_vitap"}>
        <FaInstagramSquare className="h-7 w-7 md:w-9 md:h-9 hover:scale-110 duration-150 transition-all hover:cursor-pointer hover:text-cyan-600" />
        </a>
        <a target="_blank" href={"https://x.com/GFGVITAP"}>
        <FaTwitter className="h-7 w-7 md:w-9 md:h-9 hover:scale-110 duration-150 transition-all hover:cursor-pointer hover:text-cyan-600" />
        </a>
        <a target="_blank" href={'https://www.youtube.com/@GFGVIT-AP'}>
        <FaYoutube  className="h-7 w-7 md:w-9 md:h-9 hover:scale-110 duration-150 transition-all hover:cursor-pointer hover:text-cyan-600" />
        </a>
        </motion.div>
        </div>
      <DotPattern></DotPattern>

        
    </div>
}