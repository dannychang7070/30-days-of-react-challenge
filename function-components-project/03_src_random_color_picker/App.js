import React from 'react';
import Hello from './components/Hello';
import logo from './friedhead.svg';
import './App.css';
import Color from './components/Color';

export default function App() {
  const [color, setColor] = React.useState({
    color1: 138,
    color2: 131,
    color3: 198
  });
  function colorCreator() {
    return Math.floor(Math.random() * 256)
  };
  function updateColorHandler() {
    setColor({
      color1: colorCreator(),
      color2: colorCreator(),
      color3: colorCreator()
    })
  }
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
          clicked={updateColorHandler}
          c1={color.color1.toString()}
          c2={color.color2.toString()}
          c3={color.color3.toString()}
        />
      </div>
    </div>
  );
}
