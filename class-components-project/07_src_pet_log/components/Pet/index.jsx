import React, { Component } from 'react';
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

export default class Pet extends Component {
  render() {
    const { animal, animalname, owner, illness, date } = this.props;
    return (
      <div style={divstyle}>
        <li style={outputstyle}>Animal: {animal}</li>
        <li style={outputstyle}>Name: {animalname}</li>
        <li style={outputstyle}>Owner: {owner}</li>
        <li style={outputstyle}>Illness: {illness}</li>
        <li style={outputstyle}>Date: {date}</li>
      </div>
    )
  }
}