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
            setimgurl(result.info.public_id)
            console.log(url)
        }} uploadPreset="GFGVITAP" className="bg-white p-3 rounded-lg"></CldUploadButton>
        {(imgurl.length===0)?"":<CldImage className="m-3 rounded-lg"
  width="300"
  height="300"
  src={imgurl}
  sizes="100vw"
  alt="Description of my image"
/>}
    </div>
}