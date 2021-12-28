import { useNavigate } from 'react-router-dom'

const Resturants = ( { allresturant,  setSelectedResturant} ) => {
    const navigate = useNavigate()

    const clickProducts = (resturant) => {
        setSelectedResturant(resturant)
        navigate('/selected-resturant')
    }
    const backToLocationSelector = () => {
        navigate('/location')
    }

    return (
        <div className='res'>
            <div className="resturant-list">
                <div className='box'>
                    <div onClick={backToLocationSelector} className='btn btn-three'>Back to location</div>
                </div>

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
                            <div className="box-3">
                                <div className='btn-3 btn-three' onClick={() => clickProducts(resturant)}>
                                    Show products
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className='box'>
                    <div onClick={backToLocationSelector} className='btn btn-three'>Back to location</div>
                </div>
            </div>
        </div>
    )
}
export default Resturants