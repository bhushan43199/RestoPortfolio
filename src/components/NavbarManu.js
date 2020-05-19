import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrash, faList, faHome, faPlus, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route,
    Link,

} from 'react-router-dom'

class NavbarManu extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Resto</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home"><Link to="/"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon>Home</Link></Nav.Link>
                            <Nav.Link href="#link"><Link to="/list"><FontAwesomeIcon icon={faList}></FontAwesomeIcon>List</Link></Nav.Link>
                            <Nav.Link href="#link"><Link to="/create"> <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>Create</Link></Nav.Link>
                            <Nav.Link href="#link"><Link to="/search"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>Search</Link></Nav.Link>
                            {
                                localStorage.getItem('login') ?
                                    <Nav.Link href="#link"><Link to="/logout"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon>Logout</Link></Nav.Link>
                                    :
                                    <Nav.Link href="#link"><Link to="/login"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon>Login</Link></Nav.Link>


                            }

                            {/*       <Nav.Link href="#link"><Link to="/detail">Detail</Link></Nav.Link>
 */}{/*       <Nav.Link href="#link"><Link to="/update">Update</Link></Nav.Link>
 */}

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavbarManu;
