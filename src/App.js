import React, { useState, useEffect } from "react";
import './App.css';
import NavBar from './Components/NavBar';
import { Route, Redirect, useHistory } from 'react-router-dom' // Link, Switch
import { Container } from 'semantic-ui-react';
import CardsContainer from './Containers/CardsContainer';
import AuthFormsContainer from "./Containers/AuthFormsContainer";
import { APILINK, API } from './Components/API.js'
import LandingPage from "./Containers/LandingPage";
import UserContainer from "./Containers/UserContainer";
import PostCard from "./Components/PostCards/PostCard";
import PostCreation from "./Components/PostCreation/PostCreation";
import MyAccount from "./Components/AccountCard/MyAccount";




// {/* <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" /> */}

function App(props) {

  const history = useHistory()
  const [user, setUser] = useState(null);
  const [search, setsearch] = useState("");

  useEffect(() => {
      API.validateUser(`${APILINK}/validate_user`)
        .then(user => setUser(user))
        .catch(console.error);
  }, []);

  const getUserData = () => {
    // API.validateUser(`${APILINK}/validate_user`)
    // .then(data => {
    //     setUser(data.user)
    //   })
    // .catch(() => {debugger})
  }

  const logOut = () => {
    localStorage.clear()
  }


  const handleSignup = (signupData) => {
    API.PostAPI(`${APILINK}/users/create`, signupData)
      .then(history.push("/login"))
  }; //makes a post request for a user

  const handleSearchSubmit = value => {
    setsearch(value)
    history.push("/search")
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('jwt')
    history.push('/')
  }

  const loggedIn = !!user 

  return (
    <>
    <Container className="navbar_container">
      <Route path='/' render={() => <NavBar user={user} handleSearchSubmit={handleSearchSubmit} logout={logout}/> } />
    </Container>
        <Container>
         
          {/* <Route exact path='/login' component={} /> */}

          <Container className="sublinks">
              <Route exact path="/users/:id" component={UserContainer}/>
              <Route exact path="/posts/:id" render={() => <PostCard user={user} /> }/>
              <Route exact path="/create" render={() => <PostCreation user={user} />}  />
              {/* <Route exact path="/my_profile" render={() => < MyAccount getUserData={getUserData} user={user} />} /> */}
              <Route exact path="/my_profile" >
                {loggedIn ? < MyAccount getUserData={getUserData} user={user} logOut={logOut} /> : <Redirect to='/login' />}
              </Route>
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/search' render={() => <CardsContainer search={search} /> }/>
              {/* <Route exact path='/login' render={() => <AuthFormsContainer user={user} handleLogin={handleLogin} handleSignup={handleSignup} setUser={setUser} /> }  /> */}
              <Route exact path="/login" >
                {loggedIn ? <Redirect to='/my_profile' /> : <AuthFormsContainer user={user} handleSignup={handleSignup} setUser={setUser} />}
              </Route>
          </Container>
          
        </Container>
			</>
  );
}

export default App;
