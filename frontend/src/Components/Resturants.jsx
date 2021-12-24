import { useNavigate } from 'react-router-dom'


const Resturants = ( { allresturant,  setSelectedResturant} ) => {
    const navigate = useNavigate()

    const clickProducts = (resturant) => {
        setSelectedResturant(resturant)
        navigate('/selected-resturant')
    }

    return (
        <div className="resturant-list">
            {allresturant.map(resturant => (
                <div className="resturant-card" key={resturant.name}>
                    <div className="resturant-card-image">
                        <img className='resturant-logo' src={resturant.logo} alt='' />
                    </div>
                    <div className="resturant-card-content">
                        <div className="content-3">
                            <h1>{resturant.name}</h1>
                            <h1>{resturant.name}</h1>
                        </div>
                        <button onClick={() => clickProducts(resturant)}>Show products</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Resturants