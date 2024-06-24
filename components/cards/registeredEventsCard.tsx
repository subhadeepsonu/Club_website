"use client"
import { motion } from "framer-motion";
export default function RegisteredEventsCard(props:any){
            return <motion.div initial={{
                
                opacity:0
            }} 
           
            // viewport={{
                
            //     once:true
            // }}
            whileInView={{
                
                opacity:1
            }}
            transition={{
                
                ease:"easeInOut"
            }}
            
            className="h-96 w-80 bg-black flex flex-col justify-between duration-200 items-center rounded-lg border-2 border-zinc-800 z-20 hover:border-cyan-600 hover:border-2">
                <div className="w-full h-72 flex justify-center items-center  bg-black rounded-t-lg  ">
                    <img src={props.imgurl} alt="photo" className="h-72 w-80 object-cover rounded-t-lg">

                    </img>
                </div>
                <div className="w-full h-24 text-xl font-semibold flex justify-center items-center bg-black rounded-b-lg">
                        {props.name}
                </div>
            </motion.div>
}