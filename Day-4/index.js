const express=require("express")
const app = express()

 // creating route
 app.get("/",function(req,res){
  res.send("Welcome");
 })
 app.get("/profile",function(req,res){
  res.send("Welcome to my profile page");
 })

// start server on port no 3000
app.listen(3000);
