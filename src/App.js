import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Routes from './routes';
import Header from './components/common/Header';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
