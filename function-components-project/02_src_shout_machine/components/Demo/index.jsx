import React from 'react';
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

export default function Demo({shout}) {
  return (
    <div style={divstyle}>
      <h1 style={outputstyle}>{shout}</h1>
    </div>
  )
}