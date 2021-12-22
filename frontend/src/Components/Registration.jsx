import { useState } from 'react'

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
    return (
        <div className='registration'>
            <form>
                <label>Enter your email address</label>
                <input type='text' value={email} onChange={changeEmail} />
                <label>Enter your username</label>
                <input type='text' value={username} onChange={changeUsername} />
                <label>Enter your password</label>
                <input type='text' value={password} onChange={changePassword} />
                <label>Enter your password once more</label>
                <input type='text' value={passwordOnceMore} onChange={changePasswordOnceMore} />
            </form>
            <button>Registration</button>
        </div>
    )
}
export default Registration