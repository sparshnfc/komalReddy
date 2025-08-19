import express from "express";
import ejs from "ejs-mate"

const app = express();

app.get("/", (req,res)=>{
    res.send("<h1>Hello</h1>")
})

app.get("/site", (req,res)=>{
    res.render("index.ejs");
})
console.log("System Runs>.........");

app.listen(3000, (req,res)=>{
    console.log(`Port start workingon ${3000}`);  
})