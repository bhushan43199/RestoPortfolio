import React, { Component } from 'react';

class RestauranstUpdate extends Component {
    constructor()
    {
        super()
        this.state={
            name:null,
            email:null,
            rating:null,
            adr:null,
            id:null
        }
    }
    componentDidMount()
    {
        fetch('http://localhost:3000/restaurant/'+this.props.match.params.id)
        .then((rsp)=>
        {
            rsp.json().then((result)=>{
               //here we are updating values by setting state in result.name
                this.setState({
                    name:result.name,
                    email:result.email,
                    rating:result.rating,
                    adr:result.adr,
                    id:result.id


                })
                
            })
        })
    }

    // making update function that calls PUT api
    update()
    {
        console.log(this.state)
        fetch("http://localhost:3000/restaurant/"+this.state.id,
       
       { 
           method:'PUT',
           headers:{
            'Content-Type':"application/json"
        }
           ,
            body:JSON.stringify(this.state)
    }).then((result)=>{
            result.json().then((rsp)=>{
                console.log(rsp)
                alert("Restaurant has been updated ")
            })
        }

        )
    }
    render() {
        console.log(this.props.match.params.id)
        return (
            <div>
               <h1> Restaurants Update></h1>
                <div>
                <input onChange={(event) => { this.setState({ id: event.target.value }) }} placeholder="Restaurant name"
                    value={this.state.id} />
                    <br></br>
                    <br></br>
                <input onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder="Restaurant name"
                    value={this.state.name} />
                    <br></br>
                    <br></br>
                    <input onChange={(event) => { this.setState({ adr: event.target.value }) }} placeholder="Restaurant Adr" 
                    value={this.state.adr}/>
                    <br></br>
                    <br></br>
                    <input onChange={(event) => { this.setState({ email: event.target.value }) }} placeholder="Restaurant Email"
                    value={this.state.email} />
                    <br></br>
                    <br></br>
                    <input onChange={(event) => { this.setState({ rating: event.target.value }) }} placeholder="Restaurant Rating" 
                    value={this.state.rating}/>
                    <br></br>
                    <br></br>

                    <button onClick={()=>{this.update()}}>Update Restaurant</button>
                </div>
            </div>
        );
    }
}

export default RestauranstUpdate;