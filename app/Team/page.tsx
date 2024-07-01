import DepartmentsPage from "@/components/pages/departments";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken"
 export const runtime = 'edge'
export default function Team(){
    const token = cookies().get('token')
    
    try {
        const check = jwt.verify(token?.value!,"secret")
        console.log(check)
    } catch (error) {
        console.log(error)
    }
    return <DepartmentsPage></DepartmentsPage>
}