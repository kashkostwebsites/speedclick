import logo from './logo.svg';
import './App.css';
function varible() {
const [count, setCount] = useState(0);
}

function handleclick() {
  setCount(count + 1);
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

        <p>Clicked: {count} times</p>
      </header>
    </div>
  );
}

export default App;
