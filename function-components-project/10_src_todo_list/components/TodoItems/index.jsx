import React from 'react';
import './index.css';

export default function TodoItems(props) {
  return (
    <div>
      <li onClick={props.click}>{props.item}</li>
    </div>
  )
}