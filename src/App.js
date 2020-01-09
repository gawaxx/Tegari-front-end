import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom' //Link, Switch
import { Container } from 'semantic-ui-react';
import CardsContainer from './Containers/CardsContainer';
// {/* <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" /> */}




function App() {
  return (
    <Router>
        <Container className="container">

          
          <Container className="navBar">
            <NavBar />
          </Container>
          {/* <Route exact path='/login' component={} /> */}

          <Container className="links">
              <Route exact path='/Search' component={CardsContainer} />
          </Container>
          
        </Container>
			</Router>
  );
}

export default App;
