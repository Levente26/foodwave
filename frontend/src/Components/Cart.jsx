import { useState,useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Cart = ( {isLoggedIn, setCartItemsNum, cartItemsNum, name} ) => {
    const [cartItems, setCartItems] = useState(null)
    
    const navigate = useNavigate()
    // console.log(cartItems !== null ? cartItems.length : '')

    useEffect(() => {
        if(isLoggedIn){
            const getCartItems = async () => {
                try {
                    const response = await axios.get(`http://localhost:5000/cartitems/${name}`)
                    setCartItems(response.data)
                } catch (err) {
                    console.log(err.response)
                }
            }
            getCartItems()
        }
    },[cartItemsNum, cartItems])
    cartItems!==null && setCartItemsNum(cartItems.length)
    
    

    const deleteItem = async(id) =>{
        console.log(id)
        const response = await axios.delete(`http://localhost:5000/cartdelete/${id}`)
        setCartItemsNum(cartItems.length)
    }

    const order = () => {
        navigate('/order')
    }

    return (
        <div className="cart">
            <h1 className="cart-title">Cart Content</h1>
            { cartItems !== null &&
                cartItems.map(item => (
                    <div className="item-row">
                        <div className="item">{item.resturant}</div>
                        <div className="item">{item.product}</div>
                        <div className="item">{item.price}</div>
                        <div onClick={() => deleteItem(item.id)} className="item">Delete</div>
                    </div>
                ))
            }
            <div onClick={order}>Order</div>
        </div>
    )
}
export default Cart