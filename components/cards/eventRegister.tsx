import { Calendar } from "lucide-react";
import { Button } from "../ui/button";

export default function EventRegister(props:any){
            return <div className="bg-black  translate-x-2 translate-y-2 hover:translate-x-0 hover:translate-y-0 z-20 min-h-72 sm:min-h-64 relative  dark:hover:border-cyan-600  rounded-lg flex flex-col dark:text-zinc-200 items-center sm:flex-row border-2 dark:border-zinc-800 hover:border-zinc-400 shadow-sm hover:shadow-lg duration-200 transition-all">
                <div className="h-4/5 w-11/12 sm:h-64 m-2 sm:w-1/3  bg-black rounded-lg ">
                    <img className="cover" src="https://content.jdmagicbox.com/comp/ernakulam/m4/0484px484.x484.140206113128.a9m4/catalogue/we-create-events-panampilly-nagar-ernakulam-event-management-companies-nsobpzm660.jpg"></img>
                </div>
                <div className="sm:h-full h-1/5  flex flex-col justify-start items-start w-full sm:w-2/3">
                    <div className="hidden h-full w-full ml-2 sm:h-1/4 font-semibold text-lg sm:text-2xl sm:flex justify-start items-center">
                        Title
                    </div>
                    <div className=" h-1/2 hidden w-full font-light sm:flex justify-start items-center ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A sapiente sit eaque omnis inventore dolor non consequatur unde, repudiandae temporibus aspernatur ut, laudantium iure enim asperiores deleniti magni nesciunt laborum.
                    </div>
                    <div className=" h-full sm:h-1/4 w-full flex items-center    pl-5   ">
                        <Calendar></Calendar>Date
                    </div>
                </div>
                    <Button size={"sm"} variant={"outline"} className="absolute text-white right-2 bottom-1 sm:bottom-5 sm:right-5">More info</Button>
            </div>
}