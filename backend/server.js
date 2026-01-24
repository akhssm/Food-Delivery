import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './config/db.js'


// app config
const app = express()
const Port = 4000

// middleware
app.use(cors())
app.use(express.json())

// db connection
connectDB();

app.get("/", (req, res) => {
  res.send("Backend is running 🚀")
})

app.listen(Port, () => {
  console.log(`Server running on port http://localhost:${Port}`)
})
