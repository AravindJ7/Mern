import express from "express"
// const express = require("express")
const app = express()
app.get("/api/notes",(req,res)=>{
res.send("You got 5 more Notes")
})
app.listen(5001,()=>{
    console.log("Server Started at Port 5001");
})