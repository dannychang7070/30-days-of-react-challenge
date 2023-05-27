import React from 'react';
import './index.css';
const outputstyle = {
  textAlign: 'center',
  fontSize: '20px',
  color: 'white'
};
export default function Thought(props) {
  return (
    <div>
      <li style={outputstyle}>{props.thought}  ▶ {props.time}</li>
      <button
        className="btn"
        onClick={props.click}>Delete Thought</button>
    </div>
  )
}