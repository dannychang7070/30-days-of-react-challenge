import React from 'react';
import { nanoid } from 'nanoid'; // Remember to add "npm add nanoid"
import Hello from './components/Hello';
import logo from './friedhead.svg';
import './App.css';
import Drink from './components/Drink';
import Bill from './components/Bill';

export default function App() {
  const [drinks] = React.useState([
    { name: 'Mojito', price: 30 },
    { name: 'Beer', price: 20 },
    { name: 'Red Wine', price: 12 },
    { name: 'White Wine', price: 10 },
    { name: 'Gin & Tonic', price: 8 },
    { name: 'Tequila Shot', price: 5 },
  ]);
  const [bill, setBill] = React.useState(0);

  function addDrinkHandler(drinkIndex) {
    let currentBill = bill;
    let addToBill = drinks[drinkIndex].price;
    let newBill = currentBill + addToBill;
    setBill(newBill);
  };

  function payBillHandler() {
    setBill(0);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>30 days of React</h1>
        <Hello />
        <h2>Day Eight / React Bar</h2>
      </header>
      <ul>
        <div>
          {drinks.map((drink, index) => {
            return <Drink
              key={nanoid()}
              name={drink.name}
              price={drink.price}
              click={() => addDrinkHandler(index)} />
          })}
        </div>
      </ul>
      <div>
        <Bill
          total={bill}
          click={() => payBillHandler()} />
      </div>
    </div>
  );
}
