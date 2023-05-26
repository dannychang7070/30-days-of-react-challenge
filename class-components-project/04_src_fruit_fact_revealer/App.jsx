import React, { Component } from 'react';
import logo from './friedhead.svg';
import './App.css';
import Hello from './components/Hello';
import FruitFact from './components/FruitFact';

export default class App extends Component {
  state = {
    fruits: [
      { id: 1, name: 'Banana', fact: 'I am yellow in colour' },
      { id: 2, name: 'Peach', fact: 'I have a fuzzy skin' },
      { id: 3, name: 'Apple', fact: 'I tend to be crunchy' },
    ],
    showFruits: false,
    showFruitMessage: 'Show me fun fact!!!',
  };
  showFunFact = () => {
    const currentStatus = this.state.showFruits;
    this.setState({
      showFruits: !currentStatus,
    })
  }
  render() {
    const { fruits, showFruits, showFruitMessage } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>30 days of React</h1>
          <Hello />
          <h2>Day Four / Fruit Fact Revealer</h2>
        </header>
        <div className="container">
          <button onClick={this.showFunFact}>{showFruitMessage}</button>
        </div>
        <div className="container">
          {
            showFruits ?
              fruits.map((fruitObj) => {
                return (
                  <FruitFact key={fruitObj.id} fruit={fruitObj} />
                )
              }) :
              <div></div>
          }
        </div>
      </div>
    )
  }
}
