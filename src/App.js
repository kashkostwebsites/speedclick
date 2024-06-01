import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>How much can you click!</h1>
        <a onClick={handleClick}>
          Click Now! 
        </a>
        <p>Clicked: {count} times</p>
      </header>
    </div>
  );
}

export default App;

