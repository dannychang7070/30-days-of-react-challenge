import React from 'react';
import Hello from './components/Hello';
import logo from './friedhead.svg';
import './App.css';
import Relish from './components/Relish';

const style = {
  border: '2px solid white',
  borderRadius: '0px',
  width: '100px',
  height: '60px',
  fontSize: '30px'
};

export default function App() {
  const [relishStyles, setRelishStyles] = React.useState([
    { id: 1, name: 'Branston Pickle', description: 'A british pickle that is brown in colour' },
    { id: 2, name: 'Fruit Chutney', description: 'A chutney, surprisingly made of fruits' },
    { id: 3, name: 'Onion Jam', description: 'A sweet chutney made of onions' },
    { id: 4, name: 'Tomato Relish', description: 'A classic made with apples and tomatoes' },
    { id: 5, name: 'Picalilli', description: 'Its a yellow one that tastes weird' },
    { id: 6, name: 'Mango Chutney', description: 'A spicy one, served with Indian currys' },
  ]);
  function deleteRelishHandler(relishIndex) {
    //below we are copying the person state array, so we do not mutate the original data (this is best practise)
    const relishes = [...relishStyles];
    relishes.splice(relishIndex, 1);
    setRelishStyles(relishes);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>30 days of React</h1>
        <Hello />
        <h2>Day Five / Relish Reminder</h2>
      </header>
      <div className="container">
        {
          relishStyles.length > 0 ?
            <div>
              {relishStyles.map((relish, index) => {
                return <Relish
                  key={relish.id}
                  name={relish.name}
                  description={relish.description}
                  click={() => deleteRelishHandler(index)} />
              })}
            </div> :
            <div>
              <h1>DON'T FORGET ABOUT RELISH!</h1>
              <button
                style={style}
                onClick={() => window.location.reload()}>OK</button>
            </div>
        }
      </div>
    </div>
  );
}
