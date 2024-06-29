"use server"
import nodemailer from "nodemailer";
var transport = nodemailer.createTransport({
    service:"gmail",
    auth: {
      user: "subhadeepthandaka@gmail.com",
      pass: "srbx dsrc cajd fyva"
    }
  });

export const sendEmail = async (email:string,name:string)=>{
    try {
        const username = name.split(' ')
        const info = await transport.sendMail({
            from:"subhadeepthandaka@gmail.com",
            to:`${email}`,
            subject:"Test",
            text:"Sup brother",
            html:`
            <div style="width: 600px; height: 375px; margin: 0 auto; position: relative; background-image: url('https://utfs.io/f/24fcb596-c93f-46c0-9b74-9e571db212e0-22k0zs.45.20_d8065d6d.jpg'); background-size: cover; background-position: center;">
        <div style=" padding-left: 35%; padding-top: 28%; font-size: x-large; font-weight: bold;">
        ${username[0]}
        </div>
    </div>
        `
        })
        console.log("yes sir")
        console.log(info.accepted)
    } catch (error) {
        console.log(`${error}`)
        throw new Error("couldnt send mail")
    }
}