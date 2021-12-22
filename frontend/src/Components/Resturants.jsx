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
                        <img src={resturant.logo} alt='' width={250} height={200} />
                    </div>
                    <div className="resturant-card-content">
                        <h3 className="resturant-name">{resturant.name}</h3>
                        <button onClick={() => clickProducts(resturant)}>Show products</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Resturants