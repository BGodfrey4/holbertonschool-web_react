import logo from '../assets/holberton-logo.jpg';
// import './App.css';
import './App.css'
import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School Dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">
            Email:
            <input type="email" id="email" name="email" />
          </label>
          <label htmlFor="password">
            Password:
            <input type="password" id="password" name="password" />
          </label>
          <button>OK</button>
        </form>
      </body>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </footer>
    </div>
  );
}

export default App;
