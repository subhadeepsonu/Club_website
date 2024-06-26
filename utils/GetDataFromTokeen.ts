import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export const GetDataFromToken = (req: NextRequest) => {
    try {
        const token = req.cookies.get('token');
        console.log(token)
        if (!token) {
            throw new Error("No token found");
        }
        const decodedToken: any = jwt.verify(token.value,process.env.JWT_TOKEN_SECRET!);
        console.log(decodedToken)
        return decodedToken;
    } catch (error:any) {
        console.error("Failed to decode token:", error.message);
        throw new Error("Failed to decode token");
    }
}