import React from 'react';
import { nanoid } from 'nanoid'; // Remember to add "npm add nanoid"
import Hello from './components/Hello';
import logo from './friedhead.svg';
import './App.css';
import Thought from './components/Thought';

export default function App() {
  const [thoughts, setThoughts] = React.useState([]);
  const myRef = React.useRef();
  function addThoughtHandler(event) {
    event.preventDefault();
    if (myRef.current.value.trim() === '') {
      alert("Can't allow empty thought!");
      return;
    }
    const currentThoughts = [...thoughts];
    const newthought = {};
    newthought.content = myRef.current.value;
    var date = new Date();
    var hour = date.getHours();
    var mins = date.getMinutes();
    var seconds = date.getSeconds();
    newthought.time = (hour + ':' + mins + ':' + seconds);
    currentThoughts.push(newthought);
    setThoughts(currentThoughts);
    myRef.current.value = null;
  }
  function deleteThoughtHandler(thoughtIndex) {
    //below we are copying the person state array, so we do not mutate the original data (this is best practise)
    const currentThoughts = [...thoughts];
    currentThoughts.splice(thoughtIndex, 1);
    setThoughts(currentThoughts);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>30 days of React</h1>
        <Hello />
        <h2>Day Six / Thought Log</h2>
      </header>
      <form onSubmit={(event) => addThoughtHandler(event)}>
        <input ref={myRef} placeholder="Type Thought" type="text" className="textfield" />
        <input value="Post" type="submit" className="mainbtn" />
      </form>
      <ul>
        <div>
          {thoughts.map((thought, index) => {
            return <Thought
              key={nanoid()}
              thought={thought.content}
              time={thought.time}
              click={() => deleteThoughtHandler(index)} />
          })
            //reversing the array so the latest post shows first
            .reverse()}
        </div>
      </ul>
    </div>
  );
}
