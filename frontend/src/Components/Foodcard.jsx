import axios from 'axios'
import { useState } from 'react'

const FoodCard = ({ product }) => {
    const [toggle, setToggle] = useState(false)

    const clickToggle = () => {
        setToggle(!toggle)
    }
    const addToCart = async (foodname, price) => {
        const cartData = {product: foodname, price: price}
        const response = await axios.post('http://localhost:5000/cart', cartData)
        console.log(response)
    }

    return (
        <div className='food-card'>
            <h1 className='foodname'>{product.foodname}</h1> 
            <div className='food-content'>
                <div>
                    <img className='food-image' src={product.image} alt='' />
                </div>
                <div>
                    {!toggle && product.ingredients.map(ingredient => (
                        <ul>
                            <li>{ingredient}</li>
                        </ul>
                    ))}
                    {toggle && product.allergens.map(allergen => (
                        <ul>
                            <li>{allergen}</li>
                        </ul>
                    ))}
                    <button onClick={clickToggle}>{!toggle ? 'Show allergens' : 'Show ingredients'}</button>
                </div>
            </div>
            <div className='food-price'>
                {product.price} HUF
                <button onClick={() => addToCart(product.foodname, product.price)}>Add to cart</button>
            </div>
        </div>
    )
}
export default FoodCard