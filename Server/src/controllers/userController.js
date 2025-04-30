import UserModel from "../Models/userModel.js"
import validator from "validator"

const userRegistration = async (req, res) => {
    try {
        const { email, password, name } = req.body

        if(!email || !password || !name){
            return res.json({success:false, message:"Please fill all the fields"})
        }

        const isEmail = validator.isEmail(email)

        if (!isEmail) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }

        if(password.length < 6){
            return res.json({success:false, message:"Password should be atleast 6 characters long"})
        }

        if(name.length < 3){
            return res.json({success:false, message:"Name should be valid"})
        }

        const user = await UserModel.findOne({ email })

        if (user) {
            return res.json({ success: false, message: "User already exists" })
        }

        const newUser = new UserModel({ email, password, name })
        await newUser.save()

        res.json({ success: true, message: "Welcome" })

    } catch (error) {
        console.log(error)
    }
}

const userLogin = async (req, res) => {
    try {
        const {email,password} = req.body

        if(!email || !password ){
            return res.json({success:false, message:"Please fill all the fields"})
        }

        const isEmail = validator.isEmail(email)

        if (!isEmail) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }

        if(password.length < 6){
            return res.json({success:false, message:"Password should be atleast 6 characters long"})
        }

        const user = await UserModel.findOne({ email, password })

        if (!user) {
            return res.json({ success: false, message: "Invalid Credentials" })
        }

        res.json({ success: true, message: "Welcome Back" })

    } catch (error) {
        console.log(error)
    }
}

export {userRegistration,userLogin}