import logo from './logo.svg';
import './App.css';
const [count, setCount] = useState(0);

function handleclick() {
  setCount(count + 1);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          onClick="handleclick()"
        >
          Click Now! 
        </a>

        <p>Clicked: {count} times</p>
      </header>
    </div>
  );
}

export default App;
