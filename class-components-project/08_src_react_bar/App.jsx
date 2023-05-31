import React, { Component } from 'react';
import { nanoid } from 'nanoid'; // Remember to add "npm add nanoid"
import logo from './friedhead.svg';
import './App.css';
import Hello from './components/Hello';
import Drink from './components/Drink';
import Bill from './components/Bill';

export default class App extends Component {
  state = {
    drinks: [
      { name: 'Mojito', price: 30 },
      { name: 'Beer', price: 20 },
      { name: 'Red Wine', price: 12 },
      { name: 'White Wine', price: 10 },
      { name: 'Gin & Tonic', price: 8 },
      { name: 'Tequila Shot', price: 5 },
    ],
    bill: 0,
  };

  addDrinkHandler = (drinkIndex) => {
    let currentBill = this.state.bill;
    let addToBill = this.state.drinks[drinkIndex].price;
    let newBill = currentBill + addToBill;
    this.setState({ bill: newBill })
  };

  payBillHandler = () => {
    this.setState({ bill: 0 })
  };

  render() {
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
            {this.state.drinks.map((drink, index) => {
              return <Drink
                key={nanoid()}
                name={drink.name}
                price={drink.price}
                click={() => this.addDrinkHandler(index)} />
            })}
          </div>
        </ul>
        <div>
          <Bill
            total={this.state.bill}
            click={() => this.payBillHandler()} />
        </div>
      </div>
    )
  }
}
