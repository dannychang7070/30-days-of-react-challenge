import React from 'react';
import './index.css';

const outputstyle = {
  textAlign: 'center',
  fontSize: '20px',
  color: 'black'
};

const divstyle = {
  textAlign: 'center',
  fontSize: '20px',
  backgroundColor: 'white',
  minWidth: '100px',
  padding: '20px',
  margin: '10px',
  display: 'inline-block'
};
export default function Pet(props) {
  return (
    <div style={divstyle}>
      <li style={outputstyle}>Animal: {props.animal}</li>
      <li style={outputstyle}>Name: {props.animalname}</li>
      <li style={outputstyle}>Owner: {props.owner}</li>
      <li style={outputstyle}>Illness: {props.illness}</li>
      <li style={outputstyle}>Date: {props.date}</li>
    </div>
  )
}