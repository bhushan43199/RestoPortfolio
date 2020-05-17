import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrash, faList, faHome, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Route,
  Link,

} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'

import Home from './components/Home'
import RestaurantCreate from './components/RestauranstCreate'
import RestaurantDetail from './components/RestauranstDetail'
import RestaurantList from './components/RestauranstList'
import RestaurantSearch from './components/RestauranstSearch'
import RestaurantUpdate from './components/RestauranstUpdate'


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Resto</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home"><Link to="/"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon>Home</Link></Nav.Link>
      <Nav.Link href="#link"><Link to="/list"><FontAwesomeIcon icon={faList}></FontAwesomeIcon>List</Link></Nav.Link>
      <Nav.Link href="#link"><Link to="/create"> <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>Create</Link></Nav.Link>
      <Nav.Link href="#link"><Link to="/search"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>Search</Link></Nav.Link>
{/*       <Nav.Link href="#link"><Link to="/detail">Detail</Link></Nav.Link>
 */}{/*       <Nav.Link href="#link"><Link to="/update">Update</Link></Nav.Link>
 */}
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        
        <Route path="/list">
          <RestaurantList />
        </Route>
        <Route path="/create">
          <RestaurantCreate />
        </Route>
        <Route path="/search">
          <RestaurantSearch />
        </Route>
        <Route path="/detail">
          <RestaurantDetail />
        </Route>
        {/* Now we are parsing props to edit id from list */}
        <Route path="/update/:id"
        render={(props=>(<RestaurantUpdate {...props} />)
          )}
        >
          
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;