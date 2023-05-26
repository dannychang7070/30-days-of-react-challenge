import React from 'react';
import './index.css';

export default function FruitFact({ fruit }) {
  return (
    <div className="divstyle">
      <h2 className="outputstyle">{fruit.name}</h2>
      <p>{fruit.fact}</p>
    </div>
  )
}