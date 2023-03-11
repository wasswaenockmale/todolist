const SignUp = ()=>{
    return(
        <div className="main-container">
            <form className="form-container">
                <input type={"text"} placeholder="Enter your First name" className="text-input" value={"fName"}/>
                <input type={"text"} placeholder="Enter your Second name" className="text-input" value={"Lname"}/>
                <input type={"text"} placeholder="Enter your username" className="text-input" value={"uname"}/>
                <input type={"email"} placeholder="Enter your email" className="text-input" value={"email"}/>
                <input type={"password"} placeholder="Enter your password" className="text-input" value={"password"}/>
                <input type={"password"} placeholder="Confirm your password" className="text-input" value={"cpassword"}/>

            </form>
        </div>
    );
}

export default SignUp;