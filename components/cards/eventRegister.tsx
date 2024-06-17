"use client"
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { FaVenusDouble } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
export default function EventRegister(props:any){
            return <motion.div initial={{
                scaleY:0
            }}
            animate={{
                scaleY:1,
                
            }}
            transition={{
                type:"string"
            }}
            className="bg-black lg:w-[45vw] mb-5 translate-x-2 translate-y-2 hover:translate-x-0 hover:translate-y-0 z-20 min-h-72 sm:min-h-64 relative  dark:hover:border-cyan-600  rounded-lg flex flex-col dark:text-zinc-200 items-center sm:flex-row border-2 dark:border-zinc-800 hover:border-zinc-400 shadow-sm hover:shadow-lg duration-200 transition-all">
                <div className="h-4/5 w-11/12 sm:h-64 m-2 sm:w-1/3  bg-black rounded-lg ">
                    <img className="object-cover h-full w-full" src="https://content.jdmagicbox.com/comp/ernakulam/m4/0484px484.x484.140206113128.a9m4/catalogue/we-create-events-panampilly-nagar-ernakulam-event-management-companies-nsobpzm660.jpg"></img>
                </div>
                <div className="sm:h-full h-1/5  flex flex-col justify-start items-start w-full sm:w-2/3">
                    <div className="hidden h-full w-full ml-2 sm:h-1/4 font-semibold text-lg sm:text-2xl sm:flex justify-start items-center">
                        {props.title}
                    </div>
                    <div className=" h-1/2 hidden w-full font-light sm:flex justify-start items-center ">
                        {props.description}
                    </div>
                    <div className=" h-full sm:h-1/4 w-full flex items-center justify-between   px-5   ">
                        <div className="flex">
                        <Calendar></Calendar>{props.date}
                        </div>
                        <div className="flex items-center ">
                        <CiLocationOn className="h-7 w-7" />{props.location}

                        </div>
                        
                    </div>
                </div>
                    
            </motion.div>
}