const express = require('express');
const path = require('path');

const app = express();

const staticpath = path.join(__dirname,"../../public");
app.use(express.static(staticpath));
console.log(staticpath);

app.get("/",(req,res) => {
    res.send("Hi Thifs is my Homdde Pffage");
});

app.get("/about",(req,res) => {
    res.send("Hi This is my About Page");
});

app.get("/contact",(req,res) => {
    res.send("Hi This is my Contact Page");
});


app.listen(8000,()=> {
    console.log("Listening at 8000");
});