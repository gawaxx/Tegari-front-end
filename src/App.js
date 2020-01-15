import React, { useState, useEffect } from "react";
import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom' // Link, Switch
import { Container } from 'semantic-ui-react';
import CardsContainer from './Containers/CardsContainer';
import AuthFormsContainer from "./Containers/AuthFormsContainer";
import { APILINK, API } from './Components/API.js'
import LandingPage from "./Containers/LandingPage";
import UserContainer from "./Containers/UserContainer";
import PostCard from "./Components/PostCards/PostCard";
import PostCreation from "./Components/PostCreation/PostCreation";


// {/* <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" /> */}

function App() {

  const [user, setUser] = useState(null);
  const [search, setsearch] = useState("");

  useEffect(() => {
      API.validateUser()
        .then(user => setUser(user))
        .catch(console.error);
  }, []);

  const handleLogin = loginData => {
      API.login( `${APILINK}/login`, loginData).then(user => setUser(user));
  };

  const handleSignup = (signupData) => {
    API.PostAPI(`${APILINK}/users/create`, signupData)
  }; //makes a post request for a user

  const handleSearchSubmit = value => {
    setsearch(value)
  }

  return (
    <Router>
        <Container className="container">

          <Container className="navBar">
            <Route path='/' render={() => <NavBar user={user} handleSearchSubmit={handleSearchSubmit}/> } />
          </Container>
          {/* <Route exact path='/login' component={} /> */}

          <Container className="links">
              <Route exact path="/users/:id" component={UserContainer}/>
              <Route exact path="/posts/:id" component={PostCard}/>
              <Route exact path="/create" component={PostCreation} />
              <Route exact path="/account" component={PostCreation} />
              {/* <Route exact path='/users' component={UserContainer} /> */}
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/search' render={() => <CardsContainer search={search} /> }/>
              <Route exact path='/login' render={() => <AuthFormsContainer user={user} handleLogin={handleLogin} handleSignup={handleSignup} setUser={setUser} /> }  />
          </Container>
          
        </Container>
			</Router>
  );
}

export default App;
