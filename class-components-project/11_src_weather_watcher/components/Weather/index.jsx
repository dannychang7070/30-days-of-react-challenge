import React, { Component } from 'react';
import './index.css';

export default class Weather extends Component {
  render() {
    const divstyle = {
      border: '4px solid white',
      display: 'inline-block',
      marginTop: '20px',
      padding: '20px',
      width: '20%',
    };
    return (
      <div style={divstyle}>
        <h3>Current weather in {this.props.city}</h3>
        <p>Temperature: {this.props.temperature}°C</p>
        <p>Humidity: {this.props.humidity}%</p>
        <p>Conditions: {this.props.description}</p>
      </div>
    )
  }
}