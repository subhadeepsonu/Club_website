import Link from "next/link";
export default function DepartmentCard(props:any){
    return <Link href={`/Team/${props.name}`}>
    <div className="text-white   flex  justify-center items-center hover:border-cyan-600 w-80 h-40   rounded-lg border-2 border-zinc-800 hover:scale-105 duration-150 transition-all  ">
        {props.name}
    </div>
    </Link>
}