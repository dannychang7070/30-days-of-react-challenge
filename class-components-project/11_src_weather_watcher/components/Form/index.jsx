import React, { Component } from 'react';
import './index.css';

export default class Form extends Component {
  render() {
    const inputstyle = {
      border: '2px solid black',
      borderRadius: '0px',
      fontSize: '18px',
      margin: '5px',
    };
    const { loadWeather } = this.props
    return (
      <form onSubmit={loadWeather}>
        <input type="text" name="city" placeholder="City..." style={inputstyle} />
        <input type="text" name="country" placeholder="Country..." style={inputstyle} />
        <button style={inputstyle}>Get Weather</button>
      </form>
    )
  }
}