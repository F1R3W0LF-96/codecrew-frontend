import React from 'react'
import backgroundImage from '../../assets/Technical.jpeg'

export default function Login({ setExistingUser }) {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if(username === 'admin' && password === 'admin') {
            window.location.href = "/adminSection"        }
            else{
                window.location.href = "/home"
            }

    }

    return (
        <div class="card login" style={{ width: "18rem" }}>
            <img class="card-img-top" src={backgroundImage} alt="Card image cap" />
            <div class="card-body">
                <p class="card-text">
                    <input type="text" class="form-control" id="username" placeholder="Username" value={username}
                        onChange={(e)=>setUsername(e.target.value)}/>
                    <input type="password" class="form-control" id="password" 
                    placeholder="Password" value={password} 
                    onChange={(e)=>setPassword(e.target.value)}
                    /><br />
                    <button type="submit" class="btn btn-primary" onClick={(e) => handleSubmit(e)}>Login</button>
                    <a onClick={() => setExistingUser(false)} >Sign Up ?</a>

                </p>
            </div>
        </div>
    )
}
