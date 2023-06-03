import React from 'react';
import './index.css';

const divstyle = {
  display: 'inline-block',
  margin: '10px',
  padding: '10px',
  minWidth: '40%',
  verticalAlign: 'top',
};

export default function OrderItem(props) {
  return (
    <div style={divstyle}>
      <li>{props.item}: ${props.price}</li>
    </div>
  )
}