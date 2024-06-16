import Membercard from "@/components/cards/member"
import DotPattern from "@/components/magicui/dot-pattern"

export default function Departments({params} : any){
    console.log(params.department)
    return <div className="min-h-screen w-full flex justify-center items-center text-white ">
        <div className="grid grid-cols-3 pt-20 ">
            <Membercard></Membercard>
            <Membercard></Membercard>
            <Membercard></Membercard>
            <Membercard></Membercard>
            <Membercard></Membercard>
            <Membercard></Membercard>
            <Membercard></Membercard>
            <Membercard></Membercard>
            <Membercard></Membercard>
            <Membercard></Membercard>
            <Membercard></Membercard>
            <Membercard></Membercard>
            <Membercard></Membercard>
        </div>
        <DotPattern className="h-full">    </DotPattern>
    </div>
}