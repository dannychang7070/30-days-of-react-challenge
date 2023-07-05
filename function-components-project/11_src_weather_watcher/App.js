import React from 'react';
import { useRef } from 'react';
import Hello from './components/Hello';
import logo from './friedhead.svg';
import './App.css';

const inputstyle = {
  border: '2px solid black',
  borderRadius: '0px',
  fontSize: '18px',
  margin: '5px',
};

const divstyle = {
  border: '4px solid white',
  display: 'inline-block',
  marginTop: '20px',
  padding: '20px',
  width: '20%',
};

export default function App() {
  const [temperature, setTemperature] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [humidity, setHumidity] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [city, setCity] = React.useState("");
  const myRef1 = useRef();
  const myRef2 = useRef();
  function getWeather() {
    if (myRef1.current.value.trim() === '' || myRef2.current.value.trim() === '') {
      alert('Search City / Country could not be empty!')
      return;
    }
    const Api_Key = 'YOUR KEY';
    
    const city = myRef1.current.value.trim();
    const country = myRef2.current.value.trim();
    const getWeatherFromAPI = async () => {
      const weatherFromServer = await fetchWeather();
      setTemperature(weatherFromServer.main.temp);
      setCountry(weatherFromServer.sys.country);
      setHumidity(weatherFromServer.main.humidity);
      setDescription(weatherFromServer.weather[0].description);
      setCity(weatherFromServer.name);
    }
    const fetchWeather = async () => {
      try {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${Api_Key}`);
        const data = await res.json()
        return data
      } catch (error) {
      }
    }
    getWeatherFromAPI();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>30 days of React</h1>
        <Hello />
        <h2>Day Eleven / Weather Watcher</h2>
      </header>
      <div>
        <h1>Find out the WEATHER</h1>
        <div>
          <input ref={myRef1} type="text" name="city" placeholder="City..." style={inputstyle} />
          <input ref={myRef2} type="text" name="country" placeholder="Country..." style={inputstyle} />
          <button style={inputstyle} onClick={getWeather}>Get Weather</button>
        </div>
        {
          temperature.length === 0 ? "" :
            <div style={divstyle}>
              <h3>Current weather in {city}, {country}</h3>
              <p>Temperature: {temperature}°C</p>
              <p>Humidity: {humidity}%</p>
              <p>Conditions: {description}</p>
            </div>
        }
      </div>
    </div>
  );
}
