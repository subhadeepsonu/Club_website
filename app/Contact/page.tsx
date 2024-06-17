import DotPattern from "@/components/magicui/dot-pattern";
import { FaGithub, FaInstagramSquare, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Contact(){
    return <div className="flex flex-col justify-center items-center h-screen w-full">
        
        <h2 className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent z-20 text-2xl md:text-6xl font-semibold text-center">
          Want to Contact Us?
        </h2>
        <div className="text-white w-full h-32 flex justify-center items-center z-20">
            <div className="w-1/3 flex justify-around items-center">
            <FaLinkedin className="w-9 h-9 hover:scale-110 duration-150 transition-all hover:cursor-pointer hover:text-cyan-600" />

        <FaGithub className="w-9 h-9 hover:scale-110 duration-150 transition-all hover:cursor-pointer hover:text-cyan-600" />
        <FaInstagramSquare className="w-9 h-9 hover:scale-110 duration-150 transition-all hover:cursor-pointer hover:text-cyan-600" />

        <FaTwitter className="w-9 h-9 hover:scale-110 duration-150 transition-all hover:cursor-pointer hover:text-cyan-600" />

        <FaYoutube className="w-9 h-9 hover:scale-110 duration-150 transition-all hover:cursor-pointer hover:text-cyan-600" />
        </div>
        </div>
      <DotPattern></DotPattern>

        
    </div>
}