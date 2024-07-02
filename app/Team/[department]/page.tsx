import MembersPage from "@/components/pages/membersPage"

export default function Departments({params} : any){
    
    return <MembersPage id={params.department} ></MembersPage>
}