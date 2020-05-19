import React, { Component } from 'react';

class Login extends Component {
    constructor()
    {
        super();
        this.state={
            username: '',
            password: '',
        }
    }
    login()
    {
        console.log(this.state)
        fetch("http://localhost:3000/login?q=" 
        + this.state.username).then((data) => {
            data.json().then((resp)=>{
                console.log(resp)
                if(resp.length>0)
                {
                    
                    console.log(this.props.history.push('list'))
                    /*  */

                }
                else{
                    alert("Please check username and password")
                }

            })
        })
    }
    render() {
        return (
            <div>
                Login
                <br>
                </br>

                <input type="text" onChange={(event)=>this.setState({username:event.target.value})} placeholder="Username"/>
                <br>
                </br>
                <input type="password" onChange={(event)=>this.setState({password:event.target.value})}  placeholder="Password" />
                <br>
                </br>
                <button onClick={(login)=>{this.login()}}>Submit</button>
            </div>
        );
    }
}

export default Login;