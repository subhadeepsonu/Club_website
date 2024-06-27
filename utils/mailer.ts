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
            subject:"Thank you for registering",
            text:"Sup brother",
            html:"<b>Hello world?</b>"
        })
        console.log("yes sir")
        console.log(info.accepted)
    } catch (error) {
        console.log(`${error}`)
        throw new Error("couldnt send mail")
    }
}