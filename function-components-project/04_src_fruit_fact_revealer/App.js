import React from 'react';
import Hello from './components/Hello';
import logo from './friedhead.svg';
import './App.css';
import FruitFact from './components/FruitFact';

export default function App() {
  const fruits = [
    { id: 1, name: 'Banana', fact: 'I am yellow in colour' },
    { id: 2, name: 'Peach', fact: 'I have a fuzzy skin' },
    { id: 3, name: 'Apple', fact: 'I tend to be crunchy' },
  ]
  const [showFruits, setShowFruits] = React.useState(false);
  function showFunFact() {
    const currentStatus = showFruits;
    setShowFruits(!currentStatus);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>30 days of React</h1>
        <Hello />
        <h2>Day Four / Fruit Fact Revealer</h2>
      </header>
      <div className="container">
        <button onClick={showFunFact}>Show me fun fact!!!</button>
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
  );
}
