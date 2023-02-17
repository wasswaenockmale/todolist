import React, {Component} from "react";
import './index.css'
class Login extends Component{
    render(){
        return(
            <div className="login-div">
                <h1 className="center-heading">Login</h1>
                <form className="form">
                    <label for="username">Username</label>
                    <input type={"text"} placeholder="Enter username" id="username" className="text-input"/>
                    <label for="username">Password</label>
                    <input type={"password"} placeholder="Enter password" id="password" className="text-input"/>
                    <input type={"button"} value="Login" className="button-input"/>
                    <p>Sign up if you don't have an account with us</p>
                </form>
            </div>
        );
    }
}

export default Login;