

const SelectedResturant = ( { selected } ) => {
    console.log(selected)
    return (
        <div>
            {
                // Object.entries(selected).map((resturant, i) => 
                //     <div key={i}>
                //         <h1>{resturant.name}</h1>
                        
                //     </div>
                // )
                Object.keys(selected).map((resturant) => (
                    <h1>{selected.name}</h1>
                ))
               
            }
        </div>
    )
}
export default SelectedResturant