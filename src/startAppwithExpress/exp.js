const express = require('express');
const app = express();

app.get("/",(req,res) => {
    res.send("Hi Working");
})

app.listen(7000,()=> {
    console.log("Listening at 8000");
});