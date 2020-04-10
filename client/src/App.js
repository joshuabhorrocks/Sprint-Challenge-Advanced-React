import React from 'react';
import './App.css';

import PlayerList from "./components/PlayerList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
        <PlayerList />
    </div>
  );
}

export default App;
