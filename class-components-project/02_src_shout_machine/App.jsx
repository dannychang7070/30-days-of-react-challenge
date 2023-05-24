import React, {Component} from 'react';
import logo from './friedhead.svg';
import './App.css';
import Hello from './components/Hello/';
import Demo from './components/Demo';
const inputstyle = {
	textAlign: 'center',
  fontSize: '20px',
	margin: '50px',
  width: '40vw',
};

const divstyle = {
  display: 'inline-block',
};
 
export default class App extends Component {
  state = {word: ''};
  updateShoutHandler = (event) => {
    this.setState({word: event.target.value});
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>30 days of React</h1>
          <Hello/>
          <h2>Day Two / Shout @ Me</h2>
          <div style={divstyle}>
            <input style={inputstyle} onKeyUp={this.updateShoutHandler} type="text" placeholder="Do not shout @ me"/>
          </div>
        </header>
        <Demo shout={(this.state.word).toUpperCase()}/>
      </div>
    )
  }
}
