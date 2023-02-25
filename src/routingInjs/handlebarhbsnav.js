const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

const staticpath = path.join(__dirname,"../public");
app.set('views', path.join(__dirname, '../views'));
app.set("view engine","hbs");
hbs.registerPartials(path.join(__dirname,"../partials"));
console.log(path.join(__dirname,"../partials"));
app.use(express.static(staticpath));

app.get("/",(req,res) => {
    res.render("index",{
        name:"Abhay",
    })
});

app.get("/",(req,res) => {
    res.send("hello");
});

app.get("/about",(req,res) => {
    res.send("Hi This is my About Page");
});



app.listen(7000,()=> {
    console.log("Listening at 7000");
});