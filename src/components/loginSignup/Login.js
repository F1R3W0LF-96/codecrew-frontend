import React, { useState } from "react";
import backgroundImage from "../../assets/Technical.jpeg";
import "./login.css";
import { GoogleLogin } from 'react-google-login';


export default function Login({ setExistingUser }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [showLoginForm, setShowLoginForm] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      window.location.href = "/adminSection";
    } else {
      window.location.href = "/";
    }
  };
  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    // <div class="card login" style={{ width: "18rem" }}>
    //     <img class="card-img-top" src={backgroundImage} alt="Card image cap" />
    //     <div class="card-body">
    //         <p class="card-text">
    //             <input type="text" class="form-control" id="username" placeholder="Username" value={username}
    //                 onChange={(e)=>setUsername(e.target.value)}/>
    //             <input type="password" class="form-control" id="password"
    //             placeholder="Password" value={password}
    //             onChange={(e)=>setPassword(e.target.value)}
    //             /><br />
    //             <button type="submit" class="btn btn-primary" onClick={(e) => handleSubmit(e)}>Login</button>
    //             <a onClick={() => setExistingUser(false)} >Sign Up ?</a>

    //         </p>
    //     </div>
    // </div>
    <div class="container">
      <div class="blueBg">
        <div class="box signin">
          <h2>Already Have an Account?</h2>
          <button class="signinBtn" onClick={() => setShowLoginForm(true)}>Sign In</button>
        </div>
        <div class="box signup">
          <h2>Don't Have an Account?</h2>
          <button class="signupBtn" onClick={() => setExistingUser(false)}>
            Sign Up
          </button>
        </div>
      </div>
      {showLoginForm && <div class="formBx">
        <div class="form signinForm">
          <form>
            <h3>Sign In</h3>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="submit"
              value="login"
              onClick={(e) => handleSubmit(e)}
            />
            <GoogleLogin
              clientId="173588754969-09mjlifdr62i30c1p5cg1a2la5rh084h.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
            <a href="/" class="forgot">
              Forgot Password?
            </a>
          </form>
        </div>
      </div>}

    </div>
  );
}
