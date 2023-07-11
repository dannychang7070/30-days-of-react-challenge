import React from 'react';
import { nanoid } from 'nanoid';
import Hello from './components/Hello';
import logo from './friedhead.svg';
import './App.css';

export default function App() {
  const [pictures, setPictures] = React.useState([]);
  React.useEffect(() => { 
    const fetchProfile = async () => {
      try {
        const res = await fetch(`https://randomuser.me/api/?results=10`);
        const data = await res.json()
        return data
      } catch (error) {
      }
    }
    const getProfileFromAPI = async () => {
      const profileFromServer = await fetchProfile();
      let picturesItem = profileFromServer.results.map((person) => {
        return (
          <div key={nanoid()}>
            <img alt="profile" src={person.picture.large} />
            <p>{person.email}</p>
          </div>
        )
      })
      setPictures(picturesItem);
    }    
    getProfileFromAPI();
  },[]);  
  return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>30 days of React</h1>
          <Hello />
          <h2>Day Twelve / Person Generator</h2>
        </header>
        {pictures}
    </div>
  );
}
