import React, { Component } from 'react';
import './index.css';

const outputstyle = {
  textAlign: 'center',
  color: 'pink',
  fontSize: '100px',
  marginTop: '-30px',
  padding: '10px'
};

const divstyle = {
  display: 'inline-block',
};

export default class Demo extends Component {
  render() {
    const { shout } = this.props;
    return (
      <div style={divstyle}>
        <h1 style={outputstyle}>{shout}</h1>
      </div>
    )
  }
}