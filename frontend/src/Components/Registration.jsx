import { useState } from 'react'
import axios from 'axios'

const Registration = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordOnceMore, setPasswordOnceMore] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

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
                if(password === passwordOnceMore && username !== '' && email !== '' && password !== '' && passwordOnceMore !== ''){
                    let response = await axios.post('http://localhost:5000/register', userData)
                    setMessage(response.data.msg)
                    setErrorMessage('')
                } else {
                    setErrorMessage('Something went wrong please try again')
                    setMessage('')
                }
            } catch (err) {
              console.log(err)
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
                <label>Enter your password once more</label>
                <input type='password' value={passwordOnceMore} onChange={changePasswordOnceMore} />
            </form>
            <button onClick={register}>Registration</button>
            {message !== '' && <p>{message}</p>}
            {errorMessage !== '' && <p>{errorMessage}</p>}
        </div>
    )
}
export default Registration