import DepartmentCard from "@/components/cards/department";
import Membercard from "@/components/cards/member";
import DotPattern from "@/components/magicui/dot-pattern";

export default function(){
    return <div className="flex justify-center items-center pt-28">
        <div className="grid grid-cols-4 gap-5">
        <DepartmentCard></DepartmentCard>
        <DepartmentCard></DepartmentCard>
        <DepartmentCard></DepartmentCard>
        <DepartmentCard></DepartmentCard>
        <DepartmentCard></DepartmentCard>
        <DepartmentCard></DepartmentCard>
        <DepartmentCard></DepartmentCard>
        <DepartmentCard></DepartmentCard>
        <DepartmentCard></DepartmentCard>
        <DepartmentCard></DepartmentCard>
        <DepartmentCard></DepartmentCard>
        <DepartmentCard></DepartmentCard>
        </div>
        <DotPattern></DotPattern>
    </div>
}