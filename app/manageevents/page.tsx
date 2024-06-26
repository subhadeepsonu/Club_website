"use client"
import DotPattern from "@/components/magicui/dot-pattern";
import AdminPanel from "@/components/pages/adminPanel";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export default function AdminPanelPage(){
    const {data,isLoading,isError}= useQuery({
        queryKey:["admin details"],
        queryFn: async ()=>{
            const response = await axios.get('/api/user')
            console.log(response.data)
            return response.data
        }
    })
    if(isLoading){
        return <div className="h-screen w-full flex justify-center items-center text-white">
        Loading...
        <DotPattern></DotPattern>
</div>
    }
     if(isError){
        return <div className="h-screen w-full flex justify-center items-center text-white">
        Error
        <DotPattern></DotPattern>
</div>
    }
    if(data){
        if(data.message.role==="admin"){
            return <AdminPanel></AdminPanel>
        }
        else{
            return <div className="h-screen w-full flex justify-center items-center text-white ">
            Ur not authorized lil nigga
            <DotPattern></DotPattern>
    </div>  
        }
    
    
    }
}