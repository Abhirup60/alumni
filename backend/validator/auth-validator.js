const {z} = require("zod");

// signup schema using zod
const signupSchema = z.object({
    username: z.string({required_error: "Name is required"})
    .trim()
    .min(3,{message: "name must be atleast 3 characters"})
    .max(255, {message:"name must not be greater than 255 chars"}),

    email: z.string({required_error: "email is required"})
    .trim()
    .email({message:"Invalid email"})
    .min(3,{message: "email must be atleast 3 characters"})
    .max(255, {message:"email must not be greater than 255 chars"}),

    phone: z.string({required_error: "phone is required"})
    .trim()
    .min(3,{message: "phone must be atleast 3 characters"})
    .max(255, {message:"phone must not be greater than 255 chars"}),

    password: z.string({required_error: "password is required"})
    .min(3,{message: "password must be atleast 3 characters"})
    .max(255, {message:"password must not be greater than 255 chars"})

});

// login schema using zod
const loginSchema = z.object({
    email: z
    .string({message:"email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message: "email must be atleast 3 characters"})
    .max(255, {message:"email must not be greater than 255 chars"}),

    password: z.string({required_error: "password is required"})
    .min(3,{message: "password must be atleast 3 characters"})
    .max(255, {message:"password must not be greater than 255 chars"})


})

module.exports = {signupSchema, loginSchema};