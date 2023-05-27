import React, { Component } from 'react';
import './index.css';

const outputstyle = {
  textAlign: 'center',
  fontSize: '20px',
  color: 'white'
};

export default class Thought extends Component {
  render() {
    const { thought, time, click } = this.props;
    return (
      <div>
        <li style={outputstyle}>{thought}  ▶ {time}</li>
        <button
          className="btn"
          onClick={click}>Delete Thought</button>
      </div>
    )
  }
}