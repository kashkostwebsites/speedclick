import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';




function varfix() {
const [count, setCount] = useState(0);
}

function handleclick() {
 varfix.setCount(count + 1);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>How much can you click!</h1>
        <a
          onClick="handleclick()"
        >
          Click Now! 
        </a>

        <p>Clicked: {varfix.count} times</p>
      </header>
    </div>
  );
}

export default App;
