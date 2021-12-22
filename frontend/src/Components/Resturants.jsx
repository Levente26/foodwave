

const Resturants = ( { allresturant } ) => {

    console.log(allresturant)
    return (
        <div className="resturant-list">
            {allresturant.map(resturant => (
                <div className="resturant-card">
                    <div className="resturant-card-image">
                        <img src={resturant.logo} alt='' width={250} height={200} />
                    </div>
                    <div className="resturant-card-content">
                        <h3 className="resturant-name">{resturant.name}</h3>
                        <button>Show products</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Resturants