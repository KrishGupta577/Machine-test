import express from "express"
import cors from 'cors'
import dotenv from "dotenv"
import userRoutes from "./src/routes/userRoute.js"
import connectDB from "./src/configrations/dbConfig.js"
import productRoutes from "./src/routes/productRoute.js"
dotenv.config()

const PORT = 5000

const app = express()

app.use(express.json())
app.use(cors())

connectDB()

app.use('/api/user',userRoutes)
app.use('/api/product',productRoutes)


app.get('/', (req, res) => {
    res.send("Welcome to the Finance Tracker")
})

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);

})