import express from "express"
import cors from 'cors'
import mongoose from "mongoose"
import UserModel from "./src/schemas/userSchema.js"

const PORT = 5000

mongoose.connect('mongodb+srv://krishnagupta2022:krish67890@cluster0.fphuszr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => { console.log("Connected to MongoDB") })
    .catch((err) => { console.log(err) })


const app = express()

app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send("Welcome to the Finance Tracker")
})

app.post('/api/user/register', async (req, res) => {
    try {
        const { email, password, name } = req.body
        console.log(email, password, name)

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
})

// app


app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);

})