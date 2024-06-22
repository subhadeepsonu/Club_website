import { cookies } from "next/headers";
import jwt from "jsonwebtoken"
export async function GetUserDetails(){
    try {
        const token = cookies().get('token')
        const decoded = jwt.verify(token?.value!,process.env.JWT_TOKEN_SECRET!)
        return decoded
    } catch (error) {
        throw new Error(`${error}`)
    }
   
}