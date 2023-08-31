const dotenv = require("dotenv").config()
const express = require("express")
const connectDB = require("./config/dbConnection")

const port = process.env.PORT || 5000

connectDB()
const app = express()

app.use(express.json())
app.use(`/${process.env.SERVER}/projects`, require("./routes/projectsRoutes"))

app.listen(port, (req, res)=>{
    console.log("Server running on port:", port)
})

