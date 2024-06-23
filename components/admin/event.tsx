"use client"
import { Button } from "../ui/button";
export default function AdminEventCard(props:any){
    return <div className="h-96 w-80 relative bg-black flex flex-col justify-between duration-200 items-center rounded-lg border-2 border-zinc-800 z-20 hover:border-cyan-600 hover:border-2">
        <div className={`h-8 w-20 absolute left-1 top-1 ${(props.isOpen)?'bg-green-200 text-green-700 border-green-600':'bg-red-200 text-red-700 border-red-600'}   font-semibold border-2   rounded-lg flex justify-center items-center`}>
            {(props.isOpen)?"Open":"Closed"}
        </div>
    <div className="w-full h-72 flex justify-center items-center  bg-black rounded-t-lg  ">
        <img src={props.imgurl} alt="photo" className="h-72 w-80 object-cover rounded-t-lg">

        </img>
    </div>
    <div className="flex justify-between px-2 items-center h-24 w-full">
    <div className="w-3/4 h-full  font-semibold flex justify-start items-center bg-black rounded-b-lg">
            {props.name}
    </div>
    <Button size={"sm"} onClick={()=>{
        
    }}>{(props.isOpen)?"Close ":"Open "}</Button>
    </div>
</div>
}