import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import NavbarManu from './NavbarManu'

class RestauranstList extends Component {

    constructor() {
        super();
        this.state = {
            list: null,
        }
    }
    //component did mount calls when html is ready
    componentDidMount() {
        /* fetch("http://localhost:3000/restaurant").then((rsp) => {
            rsp.json().then((result) => {
                //console.log(rsp);
                this.setState({ list: result })
            })
        }) */

        // after delete refresh automatic function

        this.getData()
    }
    getData() 
    {
        fetch("http://localhost:3000/restaurant").then((rsp) => {
            rsp.json().then((result) => {
                //console.log(rsp);
                this.setState({ list: result })
            })
        })
    }


delete(id)
{
    //alert("Delete Function")
    fetch("http://localhost:3000/restaurant/" + id,
        {
            method: "DELETE"
            /* headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(this.state) */
        }).then((result) => {
            result.json().then((rsp) => {
                alert("Restaurant Has Been Deleted")
                this.getData()
            })

        })


}

render() {
    //console.warn(this.state)
    return (
        <div>
            <NavbarManu />
            <h1>Restauranst List</h1>
            {
                this.state.list ?
                    <div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>

                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Rating</th>
                                    <th>Location</th>
                                    <th>Operation. </th>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                    this.state.list.map((item, i) =>
                                        //<div className="list-wrapper">
                                        //    <span>{/* <h2>Name :</h2> */}{item.name} </span>
                                        //    <span>{/* <h2>Email :</h2> */} </span>
                                        //
                                        //    <span>{/* <h2>Rating :</h2> */}{item.rating}</span>
                                        //    <span>{/* <h2>Address :</h2> */}{item.adr}</span>
                                        //
                                        //</div>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.rating}</td>
                                            <td>{item.adr}</td>
                                            {/* Adding sixth column to update resto using API and it will send with id */}
                                            <td><Link to={"/update/" + item.id}><FontAwesomeIcon icon={faEdit} color="orange"></FontAwesomeIcon></Link>
                                                <span onClick={() => { this.delete(item.id) }}><FontAwesomeIcon icon={faTrash} color="red"></FontAwesomeIcon></span></td>

                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>
                    : <p>Please wait</p>
            }
        </div>
    );
}
}

export default RestauranstList;