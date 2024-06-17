import { FaGithub } from "react-icons/fa";
import { PinContainer } from "../ui/3d-pin";
import { CiLinkedin } from "react-icons/ci";

export default function Membercard(props:any){
    
    return    <PinContainer  className="h-36 w-80    z-20 flex  " title={props.name} href="https://ui.shadcn.com/docs/components/tooltip">
            <div className="h-full  w-1/2  rounded-lg text-white ">
                <img src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="image" className="h-full rounded-lg w-full object-cover"></img>
            </div>
            <div className="flex flex-col  justify-evenly items-center pl-2 text-white w-1/2 h-full">
                <p className="font-bold">{props.name}</p>
                <p className="font-light">{props.role}</p>
            </div>
        </PinContainer>

    
}