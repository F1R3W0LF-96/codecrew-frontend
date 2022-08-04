import React from 'react'
import Login from './Login';
import "./main.css"
import SignUp from './SignUp';

function Main() {
    const [existingUser, setExistingUser] = React.useState(true);
    return (
        <div className='login-container'>

            {existingUser ?
                <Login setExistingUser={(flag) => setExistingUser(flag)} />
                :
                <SignUp  setExistingUser={(flag) => setExistingUser(flag)}/>
            }
        </div>

    )
}

export default Main