const dotenv = require("dotenv").config()
const express = require("express")

const port = process.env.PORT || 5000

const app = express()

app.use(`/${process.env.SERVER}/projects`, require("./routes/projectsRoutes"))

app.listen(port, (req, res)=>{
    console.log("Server running on port:", port)
})

