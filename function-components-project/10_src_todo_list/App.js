import React from 'react';
import { nanoid } from 'nanoid'; // Remember to add "npm add nanoid"
import Hello from './components/Hello';
import logo from './friedhead.svg';
import './App.css';
import TodoItems from './components/TodoItems';
const inputstyle = {
  border: '2px solid black',
  borderRadius: '0px',
  fontSize: '28px',
  margin: '10px',
};
const header = {
  textAlign: 'center',
  fontSize: 'calc(10px + 4vmin)',
  color: 'black'
};
const list = {
  textAlign: 'center',
  fontSize: 'calc(10px + 4vmin)',
  color: 'white',
  lineHeight: '1.3',
};

export default function App() {
  const [items, setItems] = React.useState([]);
  const myRef = React.useRef();
  function addItem(event) {
    event.preventDefault();
    if (myRef.current.value.trim() === '') {
      alert("Can't allow empty thought!");
      return;
    }
    const newItem = {};
    newItem.text = myRef.current.value;
    const newItems = [...items, newItem];
    setItems(newItems);
    myRef.current.value = null;
  }
  function deleteItem(itemIndex) {
    const currentItems = [...items];
    currentItems.splice(itemIndex, 1);
    setItems(currentItems);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>30 days of React</h1>
        <Hello />
        <h2>Day Ten / Todo List</h2>
      </header>
      <div style={header}>
        <form onSubmit={(event) => addItem(event)}>
          <input style={inputstyle} ref={myRef} placeholder="Input Todo Task" type="text" className="textfield" />
          <button style={inputstyle} type="submit"> Add Task </button>
        </form>
      </div>
      <ul style={list}>
        <div>
          {items.map((item, index) => {
            return <TodoItems
              key={nanoid()}
              item={item.text}
              click={() => deleteItem(index)} />
          })}
        </div>
      </ul>
    </div>
  );
}
