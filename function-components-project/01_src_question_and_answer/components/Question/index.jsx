import React from 'react';
import './index.css';

const style = {
	border: '4px solid white',
	textAlign: 'center',
	margin: '50px',
};

export default function Question() {
  const [question,setQuestion] = React.useState("What is the world's deepest lake?");
  function revealAnswer() {
    setQuestion("Lake Baikal, in Russian Siberi");
  }
  return (
    <h2 onClick={revealAnswer} style={style}>
      {question}
    </h2>
  )
}