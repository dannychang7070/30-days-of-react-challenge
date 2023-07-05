import React, { Component } from 'react';
import logo from './friedhead.svg';
import './App.css';
import Hello from './components/Hello';
import Form from './components/Form';
import Weather from './components/Weather';

export default class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    description: undefined,
  }

  getWeather = async (event) => {
    event.preventDefault();
    const Api_Key = 'ab350485fa82f8dccf4260580ee30327'

    //We collect the city and country input bu the user, and use them in the fetch
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${Api_Key}`);

    //we convert the reponse into a json file  
    const response = await api_call.json();

    //we can then access elements from the json object and set them
    this.setState({
      temperature: response.main.temp,
      country: response.sys.country,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      city: response.name,
    })
  }

  render() {
    //This checks if there is an imput and only displays if there is data to show
    const check = this.state.temperature;
    let weather;

    if (check !== undefined) {
      weather = (
        <div>
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error} />
        </div>)
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
          <Form loadWeather={this.getWeather} />
          {weather}
        </div>
      </div>
    )
  }
}
