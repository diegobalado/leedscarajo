import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from 'recoil';
import './App.css';
import Routes from './routes';
import Header from './components/common/Header';
import ErrorBoundary from './components/common/ErrorBoundary';



function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <RecoilRoot>
          <Router>
            <Header />
            <Routes />
          </Router>
        </RecoilRoot>
      </div>
    </ErrorBoundary>
  );
}

export default App;
