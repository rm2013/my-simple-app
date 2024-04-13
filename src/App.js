import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Welcome to the React App!');

  const updateMessage = () => {
    setMessage('You clicked the button!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <button onClick={updateMessage}>Click me</button>
      </header>
    </div>
  );
}

export default App;

