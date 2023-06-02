import React, { Component } from 'react';
import './index.css';

const outputstyle = {
  textAlign: 'center',
  fontSize: 'calc(10px + 4vmin)',
  color: 'black'
};

const divstyle = {
  backgroundColor: 'white',
  display: 'inline-block',
  margin: '10px',
  padding: '10px',
  minWidth: '40%',
};

const buttonstyle = {
  border: '2px solid black',
  borderRadius: '0px',
  fontSize: '20px',
  margin: '10px',
};

export default class Bill extends Component {
  render() {
    const { total, click } = this.props;
    return (
      <div style={divstyle}>
        <h3 style={outputstyle}>Total To Pay:</h3>
        <h2 style={outputstyle}>${total}</h2>
        <button
          style={buttonstyle}
          onClick={click}>Place Order
        </button>
      </div>
    )
  }
}