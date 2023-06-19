import React, { Component } from 'react';
import './index.css';

export default class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }
  render() {
    const header = {
      textAlign: 'center',
      fontSize: 'calc(10px + 4vmin)',
      color: 'black'
    };

    const inputstyle = {
      border: '2px solid black',
      borderRadius: '0px',
      fontSize: '28px',
      margin: '10px',
    };

    return (
      <div>
        <div style={header}>
          <form onSubmit={this.props.addItem}>
            <input
              style={inputstyle}
              onChange={this.props.handleInput}
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              placeholder="Task" />
            <button style={inputstyle} type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    )
  }
}