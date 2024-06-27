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
export const AddDepartmentSchema = z.object({
    name:z.string().min(1,{message:"This feild must be filled"}),
    year:z.string().min(1,{message:"year is required"})
})
export const AddEventSchema = z.object({
    date:z.string().min(1,{message:"Date is required"}),
    description:z.string().min(1,{message:"Description is required"}),
    location:z.string().min(1,{message:"Location is required"}),
    name:z.string().min(1,{message:"Name is required"}),
    year:z.string().min(1,{message:"Year is required"}),
})
export const AddMemberSchema = z.object({
    name:z.string().min(1,{message:"Name is required"}),
})
