let key='63c5c9a519d4a08c3715bfb8da817b2b';
let city=document.getElementById('city');
let decs=document.getElementById('desc');
let windspeed=document.getElementById('windspeed');
let num=document.getElementById('hum');
let temp=document.getElementById('temp');
let tempmax=document.getElementById('tempmax');
let tempmin=document.getElementById('tempmin');

function fetchData()
{
    let cityname=document.getElementById('cityname').value;
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}`;

    fetch(api)
    .then(response=>response.json())
    //.then(data=>console.log(data));
    .then(data=>{
        city.innerHTML=data.name;
        decs.innerHTML=data.weather[0].description;
        windspeed.inert=data.wind.speed;
        temp.innerHTML=Math.round(data.main.temp-273);
        hum.innerHTML=data.main.humidity;
        tempmax.innerHTML=Math.round(data.main.temp_max-273);
        tempmin.innerHTML=Math.round(data.main.temp_min-273);

    })
    

    
}