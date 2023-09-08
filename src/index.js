require("dotenv").config() 
const express = require('express')
require("./config/db")
const rateLimit = require('express-rate-limit')
const mainRouter = require("./routes") // automatically imports index
const app = express()

const limiter = rateLimit({
	windowMs: 5 * 60 * 1000, // 5 minutes
	max: 100, // Limit each IP to 100 requests per `window`
	standardHeaders: false,
	legacyHeaders: false,
})
app.use(limiter)
app.use(express.json({limit: "1mb"}))
app.use(express.urlencoded({limit:"1mb", extended: true}))
app.use((_req,res,next)=>{
res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
res.header("Access-Control-Allow-Headers", "Content-Type")
next()
})
app.disable("x-powered-by")

app.use("/api", mainRouter)

app.use("*", (req,res)=>{
  res.status(404).json({data: "Not found 🧭"})
})

app.use((error,req,res,next)=>{
  console.log(">> Server error", error)
  res.status(500).json({data: "Internal server error 🧯"})
})

const PORT = 4001
app.listen(PORT, ()=>{
  console.log(`App running in: http://localhost:${PORT}`)
})