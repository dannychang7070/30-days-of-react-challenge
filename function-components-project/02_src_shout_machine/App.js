import React from 'react';
import Hello from './components/Hello';
import logo from './friedhead.svg';
import './App.css';
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

export default function App() {
  const [word, setWord] = React.useState('');
  function updateShoutHandler(e) {
    setWord(e.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>30 days of React</h1>
        <Hello />
        <h2>Day Two / Shout @ Me</h2>
        <div style={divstyle}>
          <input style={inputstyle} onKeyUp={updateShoutHandler} type="text" placeholder="Do not shout @ me" />
        </div>
      </header>
      <Demo shout={word.toUpperCase()} />
    </div>
  );
}
