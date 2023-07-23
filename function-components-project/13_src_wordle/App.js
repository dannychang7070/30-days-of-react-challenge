import React, { useEffect, useState } from 'react';
import Hello from './components/Hello';
import { nanoid } from 'nanoid';
import logo from './friedhead.svg';
import './App.css';
import wordFromServer from './global/wordsList.json'
// const API_URL = "https://api.frontendexpert.io/api/fe/wordle-words";
const WORD_LENGTH = 5;
let guessCount = 0;
export default function App() {
  const [solution, setSolution] = useState('');
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState('');
  const [isGameWin, setIsGameWin] = useState(false);
  const [isGameLose, setIsGameLose] = useState(false);
  useEffect(() => {
    const handleType = (event) => {
      if (isGameWin) {
        alert("You are winner");
        window.location.reload();
        return;
      }
      if (isGameLose) {
        alert("Answer is :" + solution);
        window.location.reload();
        return;
      }
      if (event.key === 'Enter') {
        if (currentGuess.length !== 5) {
          return;
        }
        guessCount += 1;
        if (guessCount === 6) {
          setIsGameLose(true);
        }
        const newGuesses = [...guesses];
        newGuesses[guesses.findIndex(val => val == null)] = currentGuess;
        setGuesses(newGuesses);
        setCurrentGuess('');
        const isCorrect = solution === currentGuess;
        if (isCorrect) {
          setIsGameWin(true);
        }
      }
      if (event.key === 'Backspace') {
        setCurrentGuess(currentGuess.slice(0, -1));
        return;
      }
      if (currentGuess.length >= 5) {
        return;
      }
      const isLetter = event.key.match(/^[a-zA-Z]{1}$/) != null;
      if (isLetter) {
        let currentKey = event.key.toUpperCase();
        setCurrentGuess(oldGuess => oldGuess + currentKey);
      }
    };
    window.addEventListener('keydown', handleType);
    return () => {
      window.removeEventListener('keydown', handleType);
    }
  }, [currentGuess, isGameWin, isGameLose, solution, guesses]);

  useEffect(() => {
    const getWord = async () => {
      // const wordFromServer = await fetchWord();
      const randomWord = wordFromServer[Math.floor(Math.random() * wordFromServer.length)];
      setSolution(randomWord);
    }
    // Due to CORS policy: No 'Access-Control-Allow-Origin' header
    // Grab the list from wordsList.json
    // const fetchWord = async () => {
    //   try {
    //     const response = await fetch(API_URL);
    //     const words = await response.json();
    //     return words;
    //   } catch (error) {
    //   }
    // }
    getWord();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>30 days of React</h1>
        <Hello />
        <h2>Day Thirteen / Wordle</h2>
      </header>
      <div className="board">
        {
          guesses.map((guess, i) => {
            const isCurrentGuess = i === guesses.findIndex(val => val == null);
            return (
              <Line
                guess={isCurrentGuess ? currentGuess : guess || ''}
                key={nanoid()}
                isFinal={!isCurrentGuess && guess != null}
                solution={solution}
              />
            );
          })
        }
      </div>
    </div>
  );
}

function Line({ guess, isFinal, solution }) {
  const tiles = [];
  for (let i = 0; i < WORD_LENGTH; i++) {
    const char = guess[i];
    let className = 'tile';
    if (isFinal) {
      if (char === solution[i]) {
        className += ' correct';
      } else if (solution.includes(char)) {
        className += ' close';
      } else {
        className += ' incorrect';
      }
    }
    tiles.push(
      <div className={className} key={nanoid()}>
        {char}
      </div>
    );
  }
  return (
    <div className='line'>
      {tiles}
    </div>
  );
}