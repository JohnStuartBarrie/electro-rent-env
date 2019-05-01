import React from 'react';
import logo from './logo.svg';
import Welcome from './components/welcome.js';
import Button from './components/button.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome />
        <p>
          <Button onClick={()=> alert('this is a fake button')}>Alert Button</Button>
        </p>
      </header>
    </div>
  );
}

export default App;
