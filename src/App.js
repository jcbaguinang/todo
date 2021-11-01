import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'

function App() {
  const [test, setTest] = useState("asd");

  useEffect(() => {
    // fetch("http://localhost:8001/testAPI")
    //     .then(res => res.text())
    //     .then(res => setTest(res))
    //     .catch(err => console.log(err));
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. { test }
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

export default App;
