import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from './components/TextInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <TextInput />
      </header>
    </div>
  );
}

export default App;
