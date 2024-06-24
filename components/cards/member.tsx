import { PinContainer } from "../ui/3d-pin";
export default function Membercard(props:any){
    
    return    <PinContainer  className="h-36 w-80    z-20 flex  " title={props.name} href="https://ui.shadcn.com/docs/components/tooltip">
            <div className="h-full  w-1/2  rounded-lg text-white ">
                <img src={props.imgurl} alt="image" className="h-full rounded-lg w-full object-cover"></img>
            </div>
            <div className="flex flex-col  justify-evenly items-center pl-2 text-white w-1/2 h-full">
                <p className="font-bold">{props.name}</p>
                <p className="font-light">{props.role}</p>
            </div>
        </PinContainer>

    
}