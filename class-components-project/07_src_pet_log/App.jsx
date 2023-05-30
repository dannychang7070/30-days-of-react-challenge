import React, { Component } from 'react';
import { nanoid } from 'nanoid'; // Remember to add "npm add nanoid"
import logo from './friedhead.svg';
import './App.css';
import Hello from './components/Hello';
import Pet from './components/Pet';

export default class App extends Component {
  state = {
    pets: [
      { animal: 'Cat', animalname: 'Chips', owner: 'Jenny', illness: 'Scurvy', date: "05/22/2015" },
      { animal: 'Fish', animalname: 'Flubber', owner: 'John', illness: 'Elephantiasis', date: "01/21/2014" },
    ],
  };

  addPetHandler = (event) => {
    event.preventDefault();
    const pets = [...this.state.pets];
    const newpet = {};
    //for newanimal, we assign it to our ref'd input value
    newpet.animal = this.newPetAnimal.value;
    newpet.animalname = this.newPetName.value;
    newpet.owner = this.newPetOwner.value;
    newpet.illness = this.newPetIllness.value;

    //collect date data, im sure theres a better way of doing this
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();;
    newpet.date = (month + '/' + day + '/' + year);

    pets.push(newpet);
    this.setState({ pets: pets })

    //again, theres gotta be a better way of doing this
    this.newPetAnimal.value = null;
    this.newPetName.value = null;
    this.newPetOwner.value = null;
    this.newPetIllness.value = null;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>30 days of React</h1>
          <Hello />
          <h2>Day Seven / Pet Log</h2>
          <form className='form' onSubmit={(event) => this.addPetHandler(event)}>
            <h2>Add Pet Record</h2>
            <select
              className="textfield"
              ref={(input) => { this.newPetAnimal = input }}
              defaultValue={'DEFAULT'}>
              <option value="DEFAULT" disabled>Animals / Species</option>
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
              <option value="Rodent">Rodent</option>
              <option value="Fish">Fish</option>
            </select>
            <input
              type="text"
              className="textfield"
              placeholder="Pet Name"
              ref={(input) => { this.newPetName = input }} />
            <input
              type="text"
              className="textfield"
              placeholder="Owner Name"
              ref={(input) => { this.newPetOwner = input }} />
            <input
              type="text"
              className="textfield"
              placeholder="Illness"
              ref={(input) => { this.newPetIllness = input }} />
            <input
              className="mainbtn"
              type="submit"
              value="Add Pet" />
          </form>
        </header>
        <ul>
          <div>
            {this.state.pets.map((pet) => {
              return <Pet
                key={nanoid()}
                animal={pet.animal}
                animalname={pet.animalname}
                owner={pet.owner}
                illness={pet.illness}
                date={pet.date} />
            })
              //reversing the array so the latest post shows first
              .reverse()}
          </div>
        </ul>
      </div>
    )
  }
}
