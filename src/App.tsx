import React, { useContext} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import NavBar from './components/NavBar/NavBar';
import "./GlobalStyles.css";
import { myContext } from './components/Context';


function App() {
  const userObject = useContext(myContext);
  console.log(userObject);
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        {
          userObject ? null : (
            <Route path="/login" component={LoginPage} />

          )
        }
      </Switch>

    </BrowserRouter>
  );
}

export default App;
