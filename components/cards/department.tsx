import Link from "next/link";

export default function DepartmentCard(){
    return <Link href={"/Team/2"}>
    <div className="text-white dark:bg-black flex justify-center items-center hover:border-cyan-600 w-80 h-72 bg-black  rounded-lg border-2 border-zinc-800 hover:scale-105 duration-150 transition-all delay-100 ">
        haha
    </div>
    </Link>
}