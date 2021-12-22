import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className='login'>
            <form>
                <label>Enter your email address</label>
                <input type='text' value={email} onChange={changeEmail} />
                <label>Enter your password</label>
                <input type='text' value={password} onChange={changePassword} />
            </form>
            <button>Login</button>
        </div>
    )
}
export default Login