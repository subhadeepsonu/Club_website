import MembersPage from "@/components/pages/membersPage"

export default function Departments({params} : any){
    console.log(params.department)
    return <MembersPage></MembersPage>
}