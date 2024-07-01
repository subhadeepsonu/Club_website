import CheckIn from "@/components/pages/checkIn";
 export const runtime = 'edge'
export default function  CheckInPage({params}:any){
    return <CheckIn id={params}></CheckIn>
}