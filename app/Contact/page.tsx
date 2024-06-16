import DotPattern from "@/components/magicui/dot-pattern";
import { Vortex } from "@/components/ui/vortex";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram, FaInstagramSquare, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Contact(){
    return <div className="flex justify-center items-center h-screen w-full">
        <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-semibold text-center">
          Want to Contact Us?
        </h2>
        <div className="text-white w-full h-32 flex justify-center items-center">
            <div className="w-1/3 flex justify-around items-center">
            <FaLinkedin className="w-9 h-9 hover:scale-110 duration-150 transition-all hover:cursor-pointer hover:text-cyan-600" />

        <FaGithub className="w-9 h-9 hover:scale-110 duration-150 transition-all hover:cursor-pointer hover:text-cyan-600" />
        <FaInstagramSquare className="w-9 h-9 hover:scale-110 duration-150 transition-all hover:cursor-pointer hover:text-cyan-600" />

        <FaTwitter className="w-9 h-9 hover:scale-110 duration-150 transition-all hover:cursor-pointer hover:text-cyan-600" />

        <FaYoutube className="w-9 h-9 hover:scale-110 duration-150 transition-all hover:cursor-pointer hover:text-cyan-600" />
        </div>
        </div>
      </Vortex>

        
    </div>
}