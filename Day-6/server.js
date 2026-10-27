const express=require("express")

const app=express()

const userModel=require("./usermodel.js");

app.get("/",(req,res)=>{
  res.send("hi shiva");
})

app.get("/create",async (req,res)=>{
  let createdUser=await userModel.create({
       name:"shiva",
       email:"shiva@gmail.com"
  })
  res.send(createdUser);
  
})

app.listen(3000);