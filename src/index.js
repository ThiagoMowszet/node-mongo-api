const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require("./routes/users.js")

require('dotenv').config()


const app = express()
app.use(express.json())



// Middleware

app.use('/api', userRoutes)



// Routes

app.use('/', (req, res) => {
    res.send("Welcome to my api with mongoDB")
})



// MongoDB Connection

mongoose.connect(process.env.MONGODB_URI).then(() => { console.log('Connected to MongoDB') })
    .catch((err) => console.error(err))



    PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Ejecutando el servidor en el puerto: ${PORT}`);
})
