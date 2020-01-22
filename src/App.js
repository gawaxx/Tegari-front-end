import React, { useState, useEffect } from "react";
import './App.css';
import NavBar from './Components/NavBar';
import { Route, Redirect, useHistory } from 'react-router-dom' // Link, Switch
import CardsContainer from './Containers/CardsContainer';
import AuthFormsContainer from "./Containers/AuthFormsContainer";
import { APILINK, API } from './Components/API.js'
import LandingPage from "./Containers/LandingPage";
import UserContainer from "./Containers/UserContainer";
import PostCard from "./Components/PostCards/PostCard";
import PostCreation from "./Components/PostCreation/PostCreation";
import MyAccount from "./Components/AccountCard/MyAccount";
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react';
import PostEdit from "./Components/PostCreation/PostEdit";
import EditMyAccount from "./Components/AccountCard/EditMyAccount";

// {/* <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" /> */}

function App(props) {

  const history = useHistory()
  const [user, setUser] = useState(null);
  const [search, setsearch] = useState("");

  useEffect(() => {
    API.validateUser(`${APILINK}/validate_user`)
      .then(user => setUser(user))
      .catch((error) => {
        console.error('Error:', error);
      })
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

  const handleSearchSubmit = searchParams => {
    setsearch(searchParams)
    history.push("/search")
  }

  const redirectToPostPage = postid => {
    history.push(`/posts/${postid}`)
  }

  const redirectToUserPage = () => {
    history.push("/my_profile")
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
        <Route path='/' render={() => <NavBar user={user} handleSearchSubmit={handleSearchSubmit} logout={logout} />} />
      </Container>

      <Container className="content_container">

        <Container className="sublinks">
          <Route exact path="/users/:id" component={UserContainer} />
          <Route exact path="/posts/:id" render={() => <PostCard user={user} />} />
          <Route exact path="/create" render={() => <PostCreation user={user} redirectToUserPage={redirectToUserPage} />} />
          <Route exact path="/posts/:id/edit" render={() => <PostEdit user={user} redirectToPostPage={redirectToPostPage} />} />
          <Route exact path="/my_profile" >
            {loggedIn ? < MyAccount getUserData={getUserData} user={user} logOut={logOut} /> : <Redirect to='/login' />}
          </Route>
          <Route exact path='/my_profile/edit'>
            {loggedIn ? <EditMyAccount user={user} /> : <Redirect to='/login' /> }
          </Route> 
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/search' render={() => <CardsContainer search={search} />} />
          <Route exact path="/login" >
            {loggedIn ? <Redirect to='/my_profile' /> : <AuthFormsContainer user={user} handleSignup={handleSignup} setUser={setUser} />}
          </Route>
        </Container>

      </Container>

      <Segment className="footer" inverted vertical style={{ padding: '2em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='About This Project' />
                <List link inverted>
                  <List.Item as='a' target="_blank" href="https://github.com/gawaxx/mod-5-front-end" >Github Front-end</List.Item>
                  <List.Item as='a' target="_blank" href="https://github.com/gawaxx/mod-5-back-end" >Github Back-end</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={2}>
                <Header inverted as='h4' content='About Me' />
                <List link inverted>
                  <List.Item as='a' target="_blank" href="http://www.linkedin.com/in/jules-blanc-29a36b179" >LinkedIn</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={6}>
                <Header as='h4' inverted>
                  Footer Header
              </Header>
                <p>
                  *App name* made with <span role="img" aria-label="baguette"> 🥖 </span> by Jules Blanc, 2020.
                </p>
              </Grid.Column>
              <Grid.Column width={5}>
                <Header as='h4' inverted>
                  Technologies used
              </Header>
                <p>
                  React | Ruby on Rails | Semantic ui | CSS
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </>
  );
}

export default App;
