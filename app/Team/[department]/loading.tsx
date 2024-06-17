import DotPattern from "@/components/magicui/dot-pattern";

export default function Loading(){
    return <div className="h-screen w-full flex justify-center items-center text-white">
        Loading...
        <DotPattern></DotPattern>
    </div>
}