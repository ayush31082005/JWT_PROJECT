const express = require('express');
const app = express()
const cors = require("cors")
const userRoutes = require("./routes/userRoutes")
require("dotenv").config()
const mongoose = require("mongoose")


app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("database connected")
    }).catch((error) => {
        console.log("database not connected")
    })

app.use("/auth", userRoutes)
const port = process.env.PORT

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})