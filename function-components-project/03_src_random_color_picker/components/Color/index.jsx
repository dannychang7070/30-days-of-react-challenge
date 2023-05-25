import React from 'react';
import './index.css';

const outputstyle = {
  textAlign: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'black',
  paddingTop: '20vw'
};

const divstyle = {
  margin: '40px auto',
  textAlign: 'center',
  width: '40vw',
  height: '40vw',
  borderRadius: '100%',
  display: 'inline-block'
};

export default function Color({ clicked, c1, c2, c3 }) {
  let newColor = ("rgb(" + c1 + ", " + c2 + ", " + c3 + ")");
  return (
    <div style={{ ...divstyle, backgroundColor: newColor }} onClick={clicked}>
      <h1 style={outputstyle}>{newColor}</h1>
    </div>
  )
}