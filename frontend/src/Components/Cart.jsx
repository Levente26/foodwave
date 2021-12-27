import { useState,useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Cart = ( {isLoggedIn, setCartItemsNum, cartItemsNum, name} ) => {
    const [cartItems, setCartItems] = useState(null)
    const navigate = useNavigate()

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
    
    const amountList = []
    cartItems !== null && setCartItemsNum(cartItems.length)
    cartItems !== null && cartItems.map(item => amountList.push(item.price))
    const totalPrice = amountList.reduce((prev, curr) => prev + curr, 0);


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
            <div className="content-5">
                <h1>Cart Content</h1>
                <h1>Cart Content</h1>
            </div>
            {
                !isLoggedIn && <div className="emptycart"></div>
            }
            <div>
            { cartItems !== null &&
                cartItems.map(item => (
                    <div className="item-row">
                        <div className="item">{item.resturant}</div>
                        <div className="item">{item.product}</div>
                        <div className="item">{item.price} HUF</div>
                        <div className="box-8">
                            <div className='btn-8 btn-three' onClick={() => deleteItem(item.id)}>Delete</div>
                        </div>
                    </div>
                ))
            }
            {isLoggedIn && <p className="total">Total amount: {totalPrice} HUF</p>}
            </div>
            {isLoggedIn && <div className="box-9">
                <div className='btn-9 btn-three' onClick={order}>Order</div>
            </div>}
        </div>
    )
}
export default Cart