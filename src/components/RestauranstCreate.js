import React, { Component } from 'react';
import NavbarManu from './NavbarManu'

class RestauranstCreate extends Component {

    constructor(){
        super()
        this.state={
            name:null,
            email:null,
            adr:null,
            rating:null,
        }
    }

    create()
    {
        console.log(this.state)
        fetch("http://localhost:3000/restaurant",
       
       { 
           method:'Post',
           headers:{
            'Content-Type':"application/json"
        }
           ,
            body:JSON.stringify(this.state)
    }).then((result)=>{
            result.json().then((rsp)=>{
                console.log(rsp)
                alert("Restaurant has been added ")
            })
        }

        )
    }

    componentDidMount(){
        
    }
    render() {
        return (
            <div>
                <NavbarManu />
                Restaurants Create
                <div>
                    <input onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder="Restaurant name" />
                    <br></br>
                    <input onChange={(event) => { this.setState({ adr: event.target.value }) }} placeholder="Restaurant Adr" />
                    <br></br>
                    <input onChange={(event) => { this.setState({ email: event.target.value }) }} placeholder="Restaurant Email" />
                    <br></br>
                    <input onChange={(event) => { this.setState({ rating: event.target.value }) }} placeholder="Restaurant Rating" />
                    <br></br>


                    <button onClick ={()=>(this.create())}>Add Restaurant</button>

                </div>

            </div>
        );
    }
}

export default RestauranstCreate;