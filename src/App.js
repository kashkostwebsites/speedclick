import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);

    if (count > 1) {
      alert("You got your first click!")
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>How much can you click!</h1>
        <button onClick={handleClick}>
          Click Now! 
        </button>
        <p>Clicked: {count} times</p>
        
      </header>
    </div>
  );
}

export default App;

