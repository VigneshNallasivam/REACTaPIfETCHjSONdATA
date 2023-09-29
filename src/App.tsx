import React from 'react';
import logo from './logo.svg';
import './App.css';
import { End } from "./Components/End";
import { ApiDataFetcher } from './Components/ApiDataFetcher';

function App() {
  return (
    <div className="App">
      <End>Good Afternoon</End>
      <ApiDataFetcher/>
    </div>
  );
}

export default App;
