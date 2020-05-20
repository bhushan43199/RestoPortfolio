import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrash, faList, faHome, faPlus, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Route,
  Link,

} from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

import Home from './components/Home'
import RestaurantCreate from './components/RestauranstCreate'
import RestaurantDetail from './components/RestauranstDetail'
import RestaurantList from './components/RestauranstList'
import RestaurantSearch from './components/RestauranstSearch'
import RestaurantUpdate from './components/RestauranstUpdate'
import Login from './components/Login'
import Logout from './components/Logout'
import Protected from './components/Protected'



function App() {
  return (
    <div className="App">
      <Router>
        {/*  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Resto</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home"><Link to="/"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon>Home</Link></Nav.Link>
      <Nav.Link href="#link"><Link to="/list"><FontAwesomeIcon icon={faList}></FontAwesomeIcon>List</Link></Nav.Link>
      <Nav.Link href="#link"><Link to="/create"> <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>Create</Link></Nav.Link>
      <Nav.Link href="#link"><Link to="/search"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>Search</Link></Nav.Link>
      <Nav.Link href="#link"><Link to="/login"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon>Login</Link></Nav.Link>

{/*       <Nav.Link href="#link"><Link to="/detail">Detail</Link></Nav.Link>
 */}{/*       <Nav.Link href="#link"><Link to="/update">Update</Link></Nav.Link>
 */}
        {/*   
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
     */}



        {/* We have created navigation bar in component */}
        {/*         <NavbarManu /> 
          shifted navbarmanu in to every component so perform login and logout
 */}
        {/* <Route path="/list">
          <RestaurantList />
        </Route>
        <Route path="/create">
          <RestaurantCreate />
        </Route>
        <Route path="/search">
          <RestaurantSearch />
        </Route> */}
        {/* <Route path="/detail">
          <RestaurantDetail />
        </Route> */}

        {/* Now we are parsing props to edit id from list */}
        {/* <Route path="/update/:id"
          render={(props => (<RestaurantUpdate {...props} />)
          )}
        >

        </Route> */}
        <Route path="/login"
          render={props => (<Login {...props} />
          )}
        >

        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        {/* <Route exact path="/">
          <Home />
        </Route> */}
        {/* Here added home component into protected route */}
        <Protected exact path="/" component={Home} />
        <Protected exact path="/list" component={RestaurantList} />
        <Protected exact path="/create" component={RestaurantCreate} />
        <Protected exact path="/search" component={RestaurantSearch} />
        <Protected exact path="/detail" component={RestaurantDetail} />
        <Protected exact path="//update/:id" component={RestaurantUpdate} />


      </Router>
    </div>
  );
}

export default App;
