var apiKey = '07ad35004947d9debbb9b472e0fdcede';
var msg = document.getElementById("msg");
var weekDays = ["Sunday", "Monday","Tuesday","Wednesday","Thursday", "Friday", "Saturday"];
var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function getData(){
    var today = new Date();
    var input = document.querySelector(".search-box").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;


    fetch(url)
    .then(response =>response.json())
    .then(data =>{
        console.log(data);
        var temp = data.main.temp;
        var temp_min = data.main.temp_min;
        var temp_max = data.main.temp_max;
        var country = data.sys.country;
        var weather_status = data.weather[0].main;
        var city = data.name;
        console.log(data);
        console.log(temp, temp_min, temp_max, city, country, weather_status);
        document.querySelector('.city').innerHTML += city+ " , "+ country;
        document.querySelector('.date').innerHTML +=  weekDays[today.getDay()] + " " + today.getDate() + " " + month[today.getMonth()] + " " +  today.getFullYear();
        document.querySelector('.temp').innerHTML += temp + "°c";
        document.querySelector('.weather').innerHTML += weather_status;
        document.querySelector('.hi-low').innerHTML +=  temp_min + "°c /" + temp_max + "°c";
        })   
    
        
    
    .catch(()=>{
        msg.textcontent = "Please Enter a Valid city";
    })
}
