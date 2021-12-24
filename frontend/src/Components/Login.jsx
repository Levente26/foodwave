import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Login = ( { setIsLoggedIn, setName } ) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    const login = async () => {
        const loginCredentials = { email: email, password:password}
        try {
            let response = await axios.post('http://localhost:5000/login', loginCredentials)
            setMessage(response.data.msg)
            setErrorMessage('')
            console.log(response.data)
            setIsLoggedIn(true)
            setName(response.data.name)
            sessionStorage.setItem('name', response.data.name)
            sessionStorage.setItem('userid', response.data.id)
            console.log(sessionStorage.name)
            setTimeout(() =>{
                navigate('/')
            },2000)
        } 
        catch (err) {
            console.log(err.response)
            setErrorMessage(err.response.data.msg)
            setMessage('')
        }
    }

    return (
        <div className='login'>
            <form action='/login' method='POST'>
                <label>Enter your email address</label>
                <input id='email' name='email' required type='text' value={email} onChange={changeEmail} />
                <label>Enter your password</label>
                <input type='password' id='password' name='password' required value={password} onChange={changePassword} />
            </form>
            <div className="box-7">
                <div className='btn-7 btn-three' onClick={login}>Login</div>
            </div>
            {message !== '' && <p className='msg'>{message}</p>}
            {errorMessage !== '' && <p className='errmsg'>{errorMessage}</p>}
        </div>
    )
}
export default Login