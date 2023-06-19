import React, { Component } from 'react';
import { nanoid } from 'nanoid'; // Remember to add "npm add nanoid"
import logo from './friedhead.svg';
import './App.css';
import Hello from './components/Hello';
import TodoList from './components/TodoList';
import TodoItems from './components/TodoItems';

export default class App extends Component {
  constructor() {
    super();
    this.inputElement = React.createRef();
    this.state = {
      items: [],
      currentItem: { text: '', key: '' },
    }
  }

  //Handles click and adds the item to the list
  addItem = event => {
    event.preventDefault();
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        //Then we reset the state of current item
        currentItem: { text: '', key: '' },
      })
    }
  };

  //Updates the field to reflect wha you are typing in.
  handleInput = event => {
    const itemText = event.target.value;
    const currentItem = { text: itemText, key: nanoid() }
    this.setState({
      currentItem,
    })
  };

  //This filters items by removing the item with the matching key
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>30 days of React</h1>
          <Hello />
          <h2>Day Ten / Todo List</h2>
        </header>
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />

        <TodoItems
          entries={this.state.items}
          deleteItem={this.deleteItem}
        />
      </div>
    )
  }
}
