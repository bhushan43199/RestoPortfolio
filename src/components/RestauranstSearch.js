import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import NavbarManu from './NavbarManu'

class RestauranstSearch extends Component {
  /*  */
    constructor()
    {
        super();
        this.state={
            searchData:null,
            noData:false,
            
        }
    }
    search(key)
    {
        console.log(key)
        fetch("http://localhost:3000/restaurant?q="+key).then(
            (data)=>{
                data.json().then((resp)=>{
                    console.log("resp", resp)
                    if(resp.length>0)
                    {
                        this.setState({searchData:resp, noData:false})

                    }

                    else
                    {
                        this.setState({noData:true, searchData:null})
                    }
                })
            }
        )
    }
    render() {
        return (
            <div>
                <NavbarManu />
                Restaurants Search
                <Table striped bordered hover>
                    <thead>
                <input type="text" onChange={(event)=>this.search(event.target.value)}></input>
                   </thead>
                    <div>
                        {
                            this.state.searchData?
                            <div>
                                {
                                this.state.searchData.map((item)=>
                                <div>
                                <tbody>
                                
                                   <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.rating}</td>
                                    <td>{item.adr}</td>
                                    </tr>
                               
                                </tbody>
                                </div>
                                )
                                }
                            </div>
                            :""
                    
                        }
                        {
                            this.state.noData?<h3>No Data Found</h3>:null
                        }
                    </div>
                    </Table>
                
            </div>
        );
    }
}

export default RestauranstSearch;