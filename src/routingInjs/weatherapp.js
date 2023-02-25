const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const requests = require('request');
const port = 9000;

app.set("view engine","hbs");
app.set("views", path.join(__dirname, '../views'));
hbs.registerPartials( path.join(__dirname, '../partials'));

 

app.get("/weather", (req,res) => {
    const apiKey = "a62589b418c2424aae5105655232202";
    const apiURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${req.query.name}&aqi=no`;
    
    requests(apiURL ,(error,resp,body) => {
        if(error) 
        {
            console.log(err);
        }
        const weatherData = JSON.parse(body);
        res.render('fetchWeather', { weather: weatherData });
       

    });

    
    
    
});


app.listen(port,(req,res) => {
    console.log(`listening at Port Number ${port} `)
})
