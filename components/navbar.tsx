import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar(){
    return <div className="hidden h-20 w-full  justify-between items-center backdrop-blur-lg bg-white/30">
        <div className="w-1/2 h-full flex items-center justify-center text-3xl ">
            Geeks For Geeks
        </div>
        <div className="w-1/2  h-full flex justify-around items-center text-black font-normal text-sm p-5">
        <Link href="/">Home</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Events</Link>
        <Link href={''}>Teams</Link>
        <Link href={''}>Feedback</Link>
        <Button variant={"secondary"} size={"lg"}>Login</Button>
        </div>
    </div>
}