import MembersPage from "@/components/pages/membersPage"
 export const runtime = 'edge'
export default function Departments({params} : any){
    
    return <MembersPage id={params.department} ></MembersPage>
}