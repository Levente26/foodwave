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
            <article>
                <h1 className='foodname'>{product.foodname}</h1> 
            </article>
            <div className='food-content'>
                <div>
                    <img className='food-image' src={product.image} alt='' />
                </div>
                <div className='ingredient-or-allergens'>
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
                </div>
                <div className="box-6">
                    <div className='btn-6 btn-three' onClick={clickToggle}>{!toggle ? 'Show allergens' : 'Show ingredients'}</div>
                </div>
                {/* <button onClick={clickToggle}>{!toggle ? 'Show allergens' : 'Show ingredients'}</button> */}
            </div>
            <div className='food-price'>
                <p>{product.price} HUF</p>
                <div className="box-5">
                    <div className='btn-5 btn-three' onClick={() => addToCart(product.foodname, product.price)}>
                        Add to cart
                    </div>
                </div>
                {/* <button onClick={() => addToCart(product.foodname, product.price)}>Add to cart</button> */}
            </div>
        </div>
    )
}
export default FoodCard