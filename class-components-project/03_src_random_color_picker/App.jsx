import React, { Component } from 'react';
import logo from './friedhead.svg';
import './App.css';
import Hello from './components/Hello';
import Color from './components/Color';

export default class App extends Component {
  state = {
    color1: 138,
    color2: 131,
    color3: 198
  };
  colorCreator = () => {
    return Math.floor(Math.random() * 256)
  }
  updateColorHandler = () => {
    this.setState({
      color1: this.colorCreator(),
      color2: this.colorCreator(),
      color3: this.colorCreator()
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>30 days of React</h1>
          <Hello />
          <h2>Day Three / Random Color Picker</h2>
        </header>
        <div className="container">
          <Color
            clicked={this.updateColorHandler}
            c1={this.state.color1.toString()}
            c2={this.state.color2.toString()}
            c3={this.state.color3.toString()}
          />
        </div>
      </div>
    )
  }
}
