import FoodCard from "./Foodcard"
import { useState } from 'react'


const SelectedResturant = ( { selected, isLoggedIn } ) => {
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
            <div className="content-4">
                <h1>{selected.name}</h1>
                <h1>{selected.name}</h1>
            </div>
            <div className="selected-types">
                <div className="box-4">
                    <div className='btn-4 btn-three' onClick={showAllProduct}>All product</div>
                </div>
                {selected.types.map(type=> (
                    <div className="box-4">
                        <div className='btn-4 btn-three' onClick={() => filterProducts(type)}>{type}</div>
                    </div>
                ))}
            </div>
            <div className="selected-products">
                { !filtered && selected.products.map(product => <FoodCard isLoggedIn={isLoggedIn} product={product} />)}
                { filtered && productList.map(product => <FoodCard isLoggedIn={isLoggedIn} product={product} />)}
            </div>
        </div>
    )
}
export default SelectedResturant