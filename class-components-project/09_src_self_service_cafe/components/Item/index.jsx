import React, { Component } from 'react';
import './index.css';

const outputstyle = {
  textAlign: 'center',
  fontSize: '66%',
  color: 'white',
  wordWrap: 'break-word',
};

const divstyle = {
  border: '4px solid white',
  display: 'inline-block',
  margin: '3px',
  padding: '3px',
  width: '20%',
};

const buttonstyle = {
  border: '1px solid white',
  borderRadius: '0px',
  width: '100%',
};


export default class Item extends Component {
  render() {
    const { name, price, click } = this.props;
    return (
      <div style={divstyle}>
        <p style={outputstyle}>{name}</p>
        <p>${price}</p>
        <button
          style={buttonstyle}
          onClick={click}>Add Item
        </button>
      </div>
    )
  }
}