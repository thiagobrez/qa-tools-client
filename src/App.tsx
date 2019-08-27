import React from 'react';
import logo from './logo.svg';
import TextInput from './components/TextInput';
import Button from './components/Button';
import './App.css';

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo}
           className="App-logo"
           alt="logo"
      />
      <TextInput color="white"
                 backgroundColor="black"
      />
      <Button text="Click here"
              backgroundColor="darkgrey"
              color="white"
      />
    </header>
  </div>
);

export default App;
