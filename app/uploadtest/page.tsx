"use client"
import { CldUploadButton } from "next-cloudinary"
import { CldImage } from 'next-cloudinary';
import { useState } from "react";
import { getCldImageUrl } from 'next-cloudinary';
export default function UploadPage(){
    const [imgurl,setimgurl]= useState("")
    return <div className="h-screen w-full flex flex-col  justify-center items-center">
        <CldUploadButton onUpload={(result:any)=>{
            const url = getCldImageUrl({
                width:222,
                height:222,
                src:`${result.info.public_id}`
            })
            setimgurl(url)
            console.log(url)
        }} uploadPreset="GFGVITAP" className="bg-white p-3 rounded-lg">
            
        </CldUploadButton>
        <div className="h-96 w-96">
        {(imgurl.length===0)?"":<CldImage 
        deliveryType="fetch"
        className="m-3 rounded-lg object-cover"
  width="384"
  height="384"
  src={imgurl}
  sizes="100vw"
  alt="Description of my image"
/>}
</div>
    </div>
}