import React, { useState, useEffect } from "react";
import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom' // Link, Switch
import { Container } from 'semantic-ui-react';
import CardsContainer from './Containers/CardsContainer';
import AuthFormsContainer from "./Containers/AuthFormsContainer";
import { APILINK, API } from './Components/API.js'


// {/* <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" /> */}

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
      API.validateUser()
        .then(user => setUser(user))
        .catch(console.error);
  }, []);

  const handleLogin = loginData => {
      API.login( `${APILINK}/login`, loginData).then(user => setUser(user));
  };

  // const handleSignup = () => {};

  return (
    <Router>
        <Container className="container">

          
          <Container className="navBar">
            <Route path='/' render={() => <NavBar user={user} /> } />
          </Container>
          {/* <Route exact path='/login' component={} /> */}

          <Container className="links">
              <Route exact path='/Search' component={CardsContainer}/>
              <Route exact path='/login' render={() => <AuthFormsContainer user={user} handleLogin={handleLogin} setUser={setUser} /> }  />
          </Container>
          
        </Container>
			</Router>
  );
}

export default App;
