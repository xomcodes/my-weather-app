
import React, {useState} from 'react';
import './App.css';


const api = {
   key :"da856f4e9211e434ead89b686da2eb25",
  baseUrl : "http://api.openweathermap.org/data/2.5/",
}

let today = new Date(),
date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(api.key) ;
// this.state = {
//   date: date
// };


function App() {
  const[city, setCity] = useState('')
  const[weather, setWeather] = useState({})
 


const handleSearch = e=> {
  if(e.key === "Enter"){
    fetch(`${api.baseUrl}weather?q=${city}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result =>{ setWeather(result);
      setCity('');
      console.log(result);
    });

  }
}



  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'App summer': 'App') : 'App'}>
      <main>
        <div className= 'search-box'>
          <input type ="text" className= "check-search" placeholder ="Enter your Location" 
          onChange = {e => setCity(e.target.value)} value ={city} 
          onKeyPress = {handleSearch}
          >      
            </input>
             
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
        <div className="location-section">
          <h1 className ="location"> {weather.name}, {weather.sys.country}</h1>
          <div className= "date">{new Date(date).toLocaleDateString()}</div>
        </div>

       <div className = "weather-section">
         <div className = "temp">{Math.round(weather.main.temp)}<sup>o</sup>C</div>
         <div className = "weather">{weather.weather[0].main}</div>
         <div className = "pressure">Humidity: {weather.main.humidity}%</div>
         <div className = "pressure">Pressure: {weather.main.pressure}mmhg</div>
         </div>
          </div>
         ) : ('')}
      </main>
    </div>
   
  );
   
}

export default App;
