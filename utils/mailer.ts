"use server"
import nodemailer from "nodemailer";
var transport = nodemailer.createTransport({
    service:"gmail",
    auth: {
      user: "subhadeepthandaka@gmail.com",
      pass: "srbx dsrc cajd fyva"
    }
  });

export const sendEmail = async ()=>{
    try {
        const info = await transport.sendMail({
            from:"subhadeepthandaka@gmail.com",
            to:"subhadeep.stuff@gmail.com",
            subject:"Test",
            text:"Sup brother",
            html:`<div style="background-color:red height:400px width:400px">
            <p>haha brother</p>
            <img style="height:600px; width:600px;" src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="your certificate"></img>
            </div>`
        })
        console.log("yes sir")
        console.log(info.accepted)
    } catch (error) {
        console.log(`${error}`)
        throw new Error("couldnt send mail")
    }
}