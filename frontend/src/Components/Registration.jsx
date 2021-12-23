import { useState } from 'react'
import axios from 'axios'

const Registration = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordOnceMore, setPasswordOnceMore] = useState('')

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changeUsername = (e) => {
        setUsername(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    const changePasswordOnceMore = (e) => {
        setPasswordOnceMore(e.target.value)
    }
    const register = async () => {
        const userData = {name: username, email: email, password: password}
            try {
              let response = await axios.post('http://localhost:5000/register', userData)
              console.log(response)
              console.log(userData)
            } catch (err) {
              console.log(err.response)
            }
    }

    return (
        <div className='registration'>
            <form action='/register' method='POST'>
                <label>Enter your email address</label>
                <input type='text' id='email' name='email' required value={email} onChange={changeEmail} />
                <label>Enter your username</label>
                <input type='text' id='username' name='username' required  value={username} onChange={changeUsername} />
                <label>Enter your password</label>
                <input type='password' id='password' name='password' required  value={password} onChange={changePassword} />
                {/* <label>Enter your password once more</label>
                <input type='password' value={passwordOnceMore} onChange={changePasswordOnceMore} /> */}
            </form>
            <button onClick={register}>Registration</button>
        </div>
    )
}
export default Registration