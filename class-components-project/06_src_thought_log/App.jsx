import React, { Component } from 'react';
import { nanoid } from 'nanoid'; // Remember to add "npm add nanoid"
import logo from './friedhead.svg';
import './App.css';
import Hello from './components/Hello';
import Thought from './components/Thought';

export default class App extends Component {
  state = { thoughts: [] };
  myRef = React.createRef();

  addThoughtHandler = (event) => {
    event.preventDefault();
    if (this.myRef.current.value === '') {
      alert("Can't allow empty thought!");
      return;
    }
    const thoughts = [...this.state.thoughts];
    const newthought = {};
    newthought.content = this.myRef.current.value;
    var date = new Date();
    var hour = date.getHours();
    var mins = date.getMinutes();
    var seconds = date.getSeconds();
    newthought.time = (hour + ':' + mins + ':' + seconds);
    thoughts.push(newthought);
    this.setState({ thoughts: thoughts })
    this.myRef.current.value = null;
  }

  deleteThoughtHandler = (thoughtIndex) => {
    //below we are copying the person state array, so we do not mutate the original data (this is best practise)
    const thoughts = [...this.state.thoughts];
    thoughts.splice(thoughtIndex, 1);
    this.setState({ thoughts: thoughts });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>30 days of React</h1>
          <Hello />
          <h2>Day Six / Thought Log</h2>
        </header>
        <form onSubmit={(event) => this.addThoughtHandler(event)}>
          <input ref={this.myRef} placeholder="Type Thought" type="text" className="textfield" />
          <input value="Post" type="submit" className="mainbtn" />
        </form>
        <ul>
          <div>
            {this.state.thoughts.map((thought, index) => {
              return <Thought
                key={nanoid()}
                thought={thought.content}
                time={thought.time}
                click={() => this.deleteThoughtHandler(index)} />
            })
              //reversing the array so the latest post shows first
              .reverse()}
          </div>
        </ul>
      </div>
    )
  }
}
