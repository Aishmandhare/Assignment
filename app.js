var express = require('express');
var path = require('path');
var app = express();// express application
app.set('title', 'Assignment: London Weather'); //title to display

function printMessage(city, temperature)
{
    var message = Temperature + 'in' + city + 'is '+  '°C';
    console.log(message);
}

function getWeather(city)
{
    var apiKey = c318ebae2b87809a89cd96283028c257;

    var request = http.request('api.openweathermap.org/data/2.5/weather?q=London'+city +apiKey, function(response)
    {
        var body = "";

        });
};
    app.get('/getWeather', weatherinfo.callweatherapi);

    app.use(function(req, res)
    {
        var err = new Error('Not Found');
        err.status = 404;
    });



// Get data
module.exports.get = getWeather;
