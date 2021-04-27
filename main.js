const tempElement = document.querySelector(".temperature-value p")
const descElement = document.querySelector(".temperature-description p")
const locationElement = document.querySelector(".location p")
const notificationElement = document.querySelector(".notification")
const buttonElement = document.querySelector(".button")
var input = document.getElementById("search")
let city=""
let latitude=0.0
let longitude=0.0

input.addEventListener("keyup" , function(event) {

    if(event.code ===13 ){
        event.preventDefault();

        city=input.nodeValue
        getSearchWeather(city)
        console.log(city)
    }
})
const weather ={}

weather.temperature ={
    unit: "fahrenheit"
}

const KELVIN = 273

const key= "067967ceb06b394e5d8c62df957aea63"


function showError(error) {
    notificationElement.style.display="block"
    notificationElement.innerHTML=`<P> ${error.message}</P>`
}

("button").click(function () {
    let api= `http://api.openweathermap.org/data/2.5/forecast/daily?q={city name}&appid={API key}`
    var searchTerm = Math.ceil(Math.random()*1583)
      fetch(api)
        .then(function (data) {
          return data.json();
        })

    })
    .then(function( data){
        weather.temperature.value=math.floor(data.main.temp -KELVIN)
        weather.description=data.weather[0].description
        weather.city=data.name 
        weather.country= data.sys.country   
    })
    .then(function(){
        displayWeather()
    })    

function displayWeather() {

    iconElement.innerHTML=`${weather.temperature.value} *<span>F<span>`
    descElement.innerHTML=weather.description
    locationElement.innerHTML=`${weather.city}, ${weather.country}`
}

//function getSearchWeather(city){
   // let api= `http://api.openweathermap.org/data/2.5/forecast/daily?q={city name}&appid={API key}`

    //fetch(api)
    //.then(function (response ){
     //   let data = response.json()
       // return data
   