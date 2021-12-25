import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Navbar = ( { isLoggedIn, setIsLoggedIn, setName, name, cartItemsNum, setCartItemsNum } ) => {
    const navigate = useNavigate()

    const logout = async() => {
        sessionStorage.clear()
        // setCartItemsNum(0)
        setIsLoggedIn(false)
        setName('')
        setTimeout(() =>{
            navigate('/')
        }, 2000)
        const response = await axios.delete(`http://localhost:5000/cartdelete/${name}`)
        console.log(response)
    }

    return (
        <div className='navbar'>
            <Link to='/' className='link'>Home</Link>
            <Link to='/cart' className='link'>Cart 
                { (cartItemsNum > 0 && isLoggedIn) && 
                    <span className='cartItemsNum'> ( {cartItemsNum} )</span>
                }
            </Link>
            { !isLoggedIn && <Link to='/register' className='link'>Regisration</Link> }
            { !isLoggedIn && <Link to='/login' className='link'>Login</Link> }
            { isLoggedIn && <Link to='/logout' className='link' onClick={logout}>Logout</Link> }
            { isLoggedIn && <span className='name'>Signed in as {name}</span> }
        </div>
    )
}
export default Navbar