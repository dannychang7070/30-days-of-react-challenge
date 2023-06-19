import React, { Component } from 'react';
import './index.css';

export default class TodoItems extends Component {
  render() {
    const list = {
      textAlign: 'center',
      fontSize: 'calc(10px + 4vmin)',
      color: 'white',
      lineHeight: '1.3',
    };
    return (
      <ul style={list}>{this.props.entries.map((item) => {
        return (
          <li key={item.key}
            onClick={() => this.props.deleteItem(item.key)}>
            {item.text}
          </li>
        )
      })}</ul>
    )
  }
}