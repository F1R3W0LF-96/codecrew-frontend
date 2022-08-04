import React from 'react'
import backgroundImage from '../../assets/Technical.jpeg'

export default function Login({ setExistingUser }) {
    return (
        <div class="card login" style={{ width: "18rem" }}>
            <img class="card-img-top" src={backgroundImage} alt="Card image cap" />
            <div class="card-body">
                <p class="card-text">
                    <input type="text" class="form-control" id="username" placeholder="Username" />
                    <input type="password" class="form-control" id="password" placeholder="Password" /><br/>
                    <button type="submit" class="btn btn-primary" onClick={()=>window.location.href="/home"}>Login</button>
                    <a onClick={()=>setExistingUser(false)} >Sign Up ?</a>

                </p>
            </div>
        </div>
    )
}
