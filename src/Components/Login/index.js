import React, {Component} from "react";
import './index.css'
class Login extends Component{
    render(){
        return(
            <div className="login-div">
                <h1 className="center-heading">Login</h1>
                <form className="form">
                    <label for="username">Username
                        <input type={"text"} placeholder="Enter username" id="username" className="text-input"/>
                    </label>
                    <label for="username">Password
                        <input type={"password"} placeholder="Enter password" id="password" className="text-input"/>
                    </label>
                    
                    <input type={"button"} value="Login" className="button-input"/>
                    <p><a href="wwww.google.com">Forgot password?</a></p>
                    <p>Create an account, <a href="www.google.com">Sign up</a> </p>
                </form>
            </div>
        );
    }
}

export default Login;