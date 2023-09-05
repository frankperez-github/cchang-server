const dotenv = require("dotenv").config()
const express = require("express")
const connectDB = require("./config/dbConnection")
const cors = require("cors")

const port = process.env.PORT || 5000

connectDB()
const app = express()

app.use(cors({
    origin: ['http://localhost:3000/', 'https://cchang.vercel.app/', 'https://cchang-server.vercel.app/']
}))
app.use(express.json())
app.use(`/projects`, require("./routes/projectsRoutes"))

app.listen(port, (req, res)=>{
    console.log("Server running on port:", port)
})

