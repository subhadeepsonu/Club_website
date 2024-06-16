import EventRegister from "@/components/cards/eventRegister";
import DotPattern from "@/components/magicui/dot-pattern";

export default function Events(){
    return <div>
    <div className="flex justify-center  items-center min-h-screen w-full ">
    <div className="grid grid-cols-1 xl:grid-cols-2 w-full gap-5 m-5">
    <EventRegister></EventRegister>
    <EventRegister></EventRegister>
    </div>
    </div>
    <DotPattern width={16} height={16} className="min-h-screen w-full ">
    </DotPattern>
    </div>
}