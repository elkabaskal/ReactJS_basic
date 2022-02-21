/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */

import './App.css';

function App(props) {
  const topPosition = '40px';
  return (
    <div>
      <header className="App-header" style={{ top: topPosition }}>
        My First React App
        <h3>Hello, {props.name}</h3>
      </header>
    </div>
  );
}

export default App;