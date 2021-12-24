import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = ( { isLoggedIn, setIsLoggedIn, setName, name } ) => {
    const navigate = useNavigate()

    const logout = () => {
        sessionStorage.clear()
        setIsLoggedIn(false)
        setName('')
        setTimeout(() =>{
            navigate('/')
        },2000)
    }

    return (
        <div className='navbar'>
            <Link to='/' className='link'>Home</Link>
            <Link to='/cart' className='link'>Cart</Link>
            { !isLoggedIn && <Link to='/register' className='link'>Regisration</Link>}
            { !isLoggedIn && <Link to='/login' className='link'>Login</Link>}
            { isLoggedIn && <Link to='/logout' className='link' onClick={logout}>Logout</Link>}
            { isLoggedIn && `hello ${name}`}
        </div>
    )
}
export default Navbar