import React from 'react';
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
  maxWidth: '300px',
};

const buttonstyle = {
  border: '2px solid white',
  borderRadius: '0px',
  display: 'inline-block',
  margin: '10px',
  maxWidth: '100px',
  maxHeight: '40px'
};
export default function Relish(props) {
  return (
    <div style={divstyle}>
      <h3 style={outputstyle}>{props.name}</h3>
      <p>{props.description}</p>
      <button
        style={buttonstyle}
        onClick={props.click}>Not Now
      </button>

    </div>
  )
}