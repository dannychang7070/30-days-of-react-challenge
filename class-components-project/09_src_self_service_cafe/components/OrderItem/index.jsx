import React, { Component } from 'react';
import './index.css';

const divstyle = {
  display: 'inline-block',
  margin: '10px',
  padding: '10px',
  minWidth: '40%',
  verticalAlign: 'top',
};

export default class OrderItem extends Component {
  render() {
    const { item, price } = this.props;
    return (
      <div style={divstyle}>
        <li>{item}: ${price}</li>
      </div>
    )
  }
}