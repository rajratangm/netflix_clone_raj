import { User } from "../models/userModel.js";
import bcrypt from 'bcrypt'
export const Login=async (req,res)>{
    try{
        const {email, password}
    }

}

export const Register = async (req,res)=>{
    try{
        const {fullName, email, password}=req.body;
        if(!fullName||!email||!password){
            return res.status(401).json({
                message: 'Invalid data- something is missing',
                success: false
            })
        } 
        const user = await User.findOne({email});
        if(user){
            return res.status(401).json({
                message: 'This email is already used',
                success: false
            }) 
        }
        const hashedPassword = await bcrypt.hash(password, 16)
        await User.create({
            fullName, email, password:hashedPassword
        })
        return res.status(201).json({
            message: 'account created successfully',
            success: true
        })

    }catch(error){
        console.log(error)

    }
}