import React, { Component } from 'react';
import './index.css';

const outputstyle = {
  textAlign: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white'
};

const divstyle = {
  border: '4px solid white',
  display: 'inline-block',
  margin: '10px',
  padding: '10px',
  alignItems: 'center',
  width: '25%',
};

const buttonstyle = {
  border: '2px solid white',
  borderRadius: '0px',
  margin: '10px',
};

export default class Drink extends Component {
  render() {
    const { name, price, click } = this.props;
    return (
      <div style={divstyle}>
        <h3 style={outputstyle}>{name}</h3>
        <p>${price}</p>
        <button
          style={buttonstyle}
          onClick={click}>Order Drink
        </button>
      </div>
    )
  }
}