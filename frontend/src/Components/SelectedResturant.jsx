import FoodCard from "./Foodcard"
import { useState } from 'react'


const SelectedResturant = ( { selected } ) => {
    let [productList, setProductList] = useState(null)
    const [filtered, setFiltered] = useState(false)

    const filterProducts = (type) => {
        setFiltered(true)
        setProductList(selected.products.filter(product => product.type === type))
    }
    const showAllProduct = () => {
        setFiltered(false)
    }
    
    return (
        <div className="selected">
            <h1 className="selected-name">{selected.name}</h1>
            <div className="selected-types">
                <button onClick={showAllProduct}>All product</button>
                {selected.types.map(type=> (
                    <button onClick={() => filterProducts(type)}>{type}</button>
                ))}
            </div>
            <div className="selected-products">
                { !filtered && selected.products.map(product => <FoodCard product={product} />)}
                { filtered && productList.map(product => <FoodCard product={product} />)}
            </div>
        </div>
    )
}
export default SelectedResturant