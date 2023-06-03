import React from 'react';
import { nanoid } from 'nanoid'; // Remember to add "npm add nanoid"
import Hello from './components/Hello';
import logo from './friedhead.svg';
import './App.css';
import Item from './components/Item';
import Bill from './components/Bill';
import OrderItem from './components/OrderItem';

export default function App() {
  const [items] = React.useState([
    { name: 'Filter Coffee', price: 2, id: 0 },
    { name: 'Hot Chocolate', price: 3, id: 0 },
    { name: 'Cappuccino', price: 2.50, id: 0 },
    { name: 'Orange Juice', price: 2, id: 0 },
    { name: 'Sparkling Water', price: 1.50, id: 0 },
    { name: 'Lemonade / Cola', price: 2, id: 0 },
    { name: 'Salmon Bagel', price: 7, id: 1 },
    { name: 'Grilled Cheese', price: 4.50, id: 1 },
    { name: 'Tomato Soup', price: 4, id: 1 },
    { name: 'Bean Burrito', price: 6, id: 1 },
    { name: 'Spinach Pie', price: 7, id: 1 },
    { name: 'Daily Special', price: 7, id: 1 },
  ]);
  const [bill, setBill] = React.useState(0);
  const [revenue, setRevenue] = React.useState(0);
  const [customerCount, setCustomerCount] = React.useState(0);
  const [customerOrder, setCustomerOrder] = React.useState([]);
  function orderItemHandler(index) {
    //we add item price to running customer 'bill'
    let addToBill = items[index].price;
    let newBill = bill + addToBill;

    //push item to the 'customer order' array
    const currentCustomerOrder = [...customerOrder];
    const itemToAdd = {}
    itemToAdd.name = items[index].name;
    itemToAdd.price = items[index].price;
    currentCustomerOrder.push(itemToAdd);

    //we set state!
    setCustomerOrder(currentCustomerOrder);
    setBill(newBill);
  };

  function payBillHandler() {
    if (window.confirm("Are you sure?") === false) {
      return;
    };
    //calculate new total revenue
    let newRevenue = bill + revenue;

    //calculate the new customer count 
    let newCustomerCount = customerCount + 1

    //we set the updated state values
    setRevenue(newRevenue);
    setCustomerCount(newCustomerCount);

    //and reset these ones for the new customer
    setBill(0);
    setCustomerOrder([]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>30 days of React</h1>
        <Hello />
        <h2>Day Nine / Self Service Cafe</h2>
      </header>
      <div>
        <p>Takings: ${revenue} / Customers: {customerCount}</p>
      </div>
      <div>
        <div className="Menu-section">
          <h1>Drinks Menu</h1>
          <ul>
            <div>
              {items.map((item, index) => {
                //we are ONLY mapping drink items by using item id
                if (item.id === 0) {
                  return <Item
                    key={nanoid()}
                    name={item.name}
                    price={item.price}
                    //Using an arrow function as below means we do not have to 'bind'
                    click={() => orderItemHandler(index)} />
                } else {
                  return null;
                }
              })}
            </div>
          </ul>
        </div>
        <div className="Menu-section">
          <h1>Food Menu</h1>
          <ul>
            <div>
              {items.map((item, index) => {
                //we are ONLY mapping food items by using item id     
                if (item.id === 1) {
                  return <Item
                    key={nanoid()}
                    name={item.name}
                    price={item.price}
                    click={() => orderItemHandler(index)} />
                } else {
                  return null;
                }
              })}
            </div>
          </ul>
        </div>
      </div>
      <div>
        <div className="Menu-section">
          <ul>
            <div>
              <h2>Items Selected</h2>
              {customerOrder.map((orderItem) => {
                return <OrderItem
                  key={nanoid()}
                  item={orderItem.name}
                  price={orderItem.price} />
              })}
            </div>
          </ul>
        </div>
        <div className="Menu-section">
          <Bill
            key={nanoid()}
            total={bill}
            click={() => payBillHandler()}
          />
        </div>
      </div>
    </div>
  );
}
