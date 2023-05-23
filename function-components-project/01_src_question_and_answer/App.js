import Hello from './components/Hello';
import logo from './friedhead.svg';
import './App.css';
import Question from './components/Question';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>30 days of React</h1>
        <Hello />
        <h2>Day One / Question & Answer</h2>
      </header>
      <Question />
    </div>
  );
}
