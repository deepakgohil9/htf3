const express = require("express")
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.post("/",(req,res)=>{
    console.log(req.body)
    res.send("hello")
})

app.listen(PORT,()=>{
    console.log("Server Started")
})