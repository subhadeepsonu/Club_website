import { FaGithub } from "react-icons/fa";
import { PinContainer } from "../ui/3d-pin";
import { CiLinkedin } from "react-icons/ci";

export default function Membercard(){
    
    return    <PinContainer  className="h-36 w-80 z-20 flex  " title="Subhadeep" href="https://ui.shadcn.com/docs/components/tooltip">
            <div className="h-full  w-1/2 bg-red-300 rounded-lg text-white">
                
            </div>
            <div className="flex flex-col  justify-evenly items-start pl-2 text-white w-1/2 h-full">
                <p className="font-bold">Department  Name</p>
                <p className="font-light">Role</p>
            </div>
        </PinContainer>

    
}