import { useState } from 'react'
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    const login = async () => {
        const loginCredentials = { email: email, password}

      try {
        let response = await axios.post('http://localhost:5000/login', loginCredentials)
        console.log(response)
        console.log(response.data)
        sessionStorage.setItem('username', response.data.username)
        // setLoggedUser(response.data.username)
        sessionStorage.setItem('userid', response.data.id)
        // setLoggedUserId(response.data.id)
        console.log(sessionStorage.username)
        console.log('yey')

      } catch (e) {
        console.log(e.response)
        console.log('not yey')
      }
    }

    return (
        <div className='login'>
            <form>
                <label>Enter your email address</label>
                <input type='text' value={email} onChange={changeEmail} />
                <label>Enter your password</label>
                <input type='text' value={password} onChange={changePassword} />
            </form>
            <button onClick={login}>Login</button>
        </div>
    )
}
export default Login