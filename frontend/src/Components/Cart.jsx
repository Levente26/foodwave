import { useState,useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Cart = ( {isLoggedIn} ) => {
    const [cartItems, setCartItems] = useState(null)

    useEffect(() => {
        if(isLoggedIn){
            const getCartItems = async () => {
                try {
                    const response = await axios.get('http://localhost:5000/cartitems')
                    console.log(response.data)
                    setCartItems(response.data)
                } catch (err) {
                    console.log(err.response)
                }
            }
            getCartItems()
        }
    },[])

    return (
        <div className="cart">
            <h1 className="cart-title">Cart Content</h1>
            { cartItems !== null &&
                cartItems.map(item => (
                    <div className="item-row">
                        <div className="item">{item.resturant}</div>
                        <div className="item">{item.product}</div>
                        <div className="item">{item.price}</div>
                        <div className="item">Delete</div>
                    </div>
                ))
            }
        </div>
    )
}
export default Cart