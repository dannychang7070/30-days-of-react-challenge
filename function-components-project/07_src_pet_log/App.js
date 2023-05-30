import React from 'react';
import { nanoid } from 'nanoid'; // Remember to add "npm add nanoid"
import Hello from './components/Hello';
import logo from './friedhead.svg';
import './App.css';
import Pet from './components/Pet';

export default function App() {
  const [pets, setPets] = React.useState([
    { animal: 'Cat', animalname: 'Chips', owner: 'Jenny', illness: 'Scurvy', date: "05/22/2015" },
    { animal: 'Fish', animalname: 'Flubber', owner: 'John', illness: 'Elephantiasis', date: "01/21/2014" },
  ]);
  const petAnimal = React.useRef();
  const petName = React.useRef();
  const petOwner = React.useRef();
  const petIllness = React.useRef();
  function addPetHandler(event) {
    event.preventDefault();
    const currentPets = [...pets];
    const newpet = {};
    //for newanimal, we assign it to our ref'd input value
    newpet.animal = petAnimal.current.value;
    newpet.animalname = petName.current.value;
    newpet.owner = petOwner.current.value;
    newpet.illness = petIllness.current.value;

    //collect date data, im sure theres a better way of doing this
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();;
    newpet.date = (month + '/' + day + '/' + year);

    currentPets.push(newpet);
    setPets(currentPets);

    //again, theres gotta be a better way of doing this
    petAnimal.current.value = null;
    petName.current.value = null;
    petOwner.current.value = null;
    petIllness.current.value = null;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>30 days of React</h1>
        <Hello />
        <h2>Day Seven / Pet Log</h2>
      </header>
      <form className='form' onSubmit={(event) => addPetHandler(event)}>
        <h2>Add Pet Record</h2>
        <select
          className="textfield"
          ref={petAnimal}
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
          ref={petName} />
        <input
          type="text"
          className="textfield"
          placeholder="Owner Name"
          ref={petOwner} />
        <input
          type="text"
          className="textfield"
          placeholder="Illness"
          ref={petIllness} />
        <input
          className="mainbtn"
          type="submit"
          value="Add Pet" />
      </form>
      <ul>
        <div>
          {pets.map((pet) => {
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
  );
}
