

const SelectedResturant = ( { selected } ) => {
    console.log(selected)
    const list = Object.entries(selected).map(([key,value])=>{
        return (
            <div>{value.toString()}</div>
        );
      })
    
    return (
        <div>
            {
                list.map(res => (
                    <div>
                        {res[0]}
                    </div>
                ))
            }
        </div>
    )
}
export default SelectedResturant