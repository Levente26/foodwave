import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/' className='link'>Home</Link>
            <Link to='/register' className='link'>Regisration</Link>
            <Link to='/login' className='link'>Login</Link>
            <Link to='/logout' className='link'>Logout</Link>
            <Link to='/cart' className='link'>Cart</Link>
        </div>
    )
}
export default Navbar