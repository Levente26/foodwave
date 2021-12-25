import { useState,useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Cart = ( {isLoggedIn, setCartItemsNum, cartItemsNum} ) => {
    const [cartItems, setCartItems] = useState(null)
    // const [id, setId] = useState(null)

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
    },[cartItemsNum])

    const deleteItem = async(id) =>{
        console.log(id)
        setCartItemsNum(cartItemsNum - 1)
        const response = await axios.delete(`http://localhost:5000/cartdelete/${id}`)
        console.log(response)
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
                        <button onClick={() => deleteItem(item.id)} className="item">Delete</button>
                    </div>
                ))
            }
        </div>
    )
}
export default Cart