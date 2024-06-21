import z from "zod"
export const LoginSchema = z.object({
    email:z.string().min(1,{message:"This feild must be filled"}).email("This is not a valid email"),
    password:z.string().min(1,{message:"Password is required"})
})
export const SignUpSchema = z.object({
    email:z.string().min(1,{message:"This feild must be filled"}).email("This is not a valid email"),
    password:z.string().min(1,{message:"Password is required"}),
    name:z.string().min(1,{message:"Name is required"})
})