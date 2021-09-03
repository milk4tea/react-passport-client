import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
    </BrowserRouter>
  );
}

export default App;
