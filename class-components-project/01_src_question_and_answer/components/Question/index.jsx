import React, {Component} from 'react';
import './index.css';

const style = {
	border: '4px solid white',
	textAlign: 'center',
	margin: '50px',
};

export default class Question extends Component {
  state = {question:"What is the world's deepest lake?"} ;

  revealAnswer = (params) => {
    this.setState({question:'Lake Baikal, in Russian Siberia'});
  }
  
  render() {
    const {question} = this.state;
    return (
      <h2 onClick={this.revealAnswer} style={style}>
        {question}
      </h2>
    )
  }
}