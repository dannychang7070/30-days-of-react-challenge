import React, { Component } from 'react';
import './index.css';

export default class FruitFact extends Component {
  render() {
    const { fruit } = this.props;
    return (
      <div className="divstyle">
        <h2 className="outputstyle">{fruit.name}</h2>
        <p>{fruit.fact}</p>
      </div>
    )
  }
}