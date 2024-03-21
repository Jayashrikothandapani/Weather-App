import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
const [city, setcity] = useState("")
const [weather, setweather] = useState("")
const [temp, settemp] = useState("")
const [desc, setdesc] = useState("")

function handlecity(evt){
  setcity(evt.target.value)
}

function getweather(){
  var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=76c9e658e0f55df481c71e5070c33bc1`)
 
  weatherData.then(function(Success){
    console.log(Success.data)
    setweather(Success.data.weather[0].main)
    settemp(Success.data.main.temp)
    setdesc(Success.data.weather[0].description)
  })



}

  return (

    <div className='bg-black p-20'>
      <div className='bg-green-400 p-10 rounded-md'>
        <h1 className='text-2xl font-medium'>Weather Report</h1>
        <p>I can give you a weather report about your city !</p>
        <input onChange={handlecity} placeholder='Enter Your City Name' type='text' className='mt-2 border border-black rounded-md p-1'></input><br></br>
        <button onClick={getweather} className='bg-black text-white p-2 rounded-md mt-2'>Get Report</button>
        <div className='mt-2'>
          <h1><b>Weather: {weather}</b></h1>
          <p><b>Temperature: {temp}</b></p>
          <p><b>Description: {desc}</b></p>
        </div>
      </div>
    </div>
   
  );
}

export default App;
