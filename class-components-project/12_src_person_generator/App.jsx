import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import logo from './friedhead.svg';
import './App.css';
import Hello from './components/Hello';

export default class App extends Component {
  state = {
    pictures: []
  }
  componentDidMount() {
    fetch(`https://randomuser.me/api/?results=10`)
      .then(results => { return results.json() })
      .then(data => {
        let pictures = data.results.map((person) => {
          return (
            <div key={nanoid()}>
              <img alt="profile" src={person.picture.large} />
              <p>{person.email}</p>
            </div>
          )
        })
        this.setState({ pictures: pictures });
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>30 days of React</h1>
          <Hello />
          <h2>Day Twelve / Person Generator</h2>
        </header>

        {this.state.pictures}
      </div>
    )
  }
}
