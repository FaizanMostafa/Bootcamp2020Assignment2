import React from 'react';
import Favorite from './Favorite';
import './App.css';

function App() {
  return (
    <div className="App">
      <Favorite person="Amir Pinger" food="Chicken Biryani" />
      <Favorite person="Adil Altaf" food="Chicken Pulao" />
    </div>
  );
}

export default App;
