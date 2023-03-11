import React, {Component} from "react";
import './index.css'
class Login extends Component{
    state = {
        components: ["Login"]
    }

    changeComponent(){
        this.state.components.push('Signup');
    }
    render(){
        return(
            <div className="login-div">
                <h1 className="center-heading">Login</h1>
                <form className="form">
                    <label>Username
                        <input type={"text"} placeholder="Enter username" id="username" className="text-input"/>
                    </label>
                    <label>Password
                        <input type={"password"} placeholder="Enter password" id="password" className="text-input"/>
                    </label>
                    
                    <button className="button-input" onClick={this.changeComponent()}>Login</button>
                    <p><a href="wwww.google.com">Forgot password?</a></p>
                    <p>Create an account, <a href="www.google.com">Sign up</a> </p>
                </form>
            </div>
        );
    }
}

export default Login;