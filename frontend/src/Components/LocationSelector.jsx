import { useState } from 'react'

const LocationSelector = ( { resturants, setResturant, setIsClicked } ) => {
    const [selectedCity, setSelectedCity] = useState('Budapest')
    const [selectedDistrict, setSelectedDistrict] = useState('1')
    const locatedResturants = []

    const changeCity = (e) => {
        setSelectedCity(e.target.value)
    }
    const changeDistrict = (e) => {
        setSelectedDistrict(e.target.value)
    }
    const showLocatedResturants = () => {
        if(selectedCity !== 'Budapest'){
            resturants.map(resturant=> resturant.cities.filter(r=>{
                if(r.cityname===selectedCity){
                    locatedResturants.push(resturant)
                    setResturant(locatedResturants)
                    setIsClicked(true)
                }
            }))
        } else {
            resturants.map(resturant=> resturant.cities.map(res => res.districts.filter(r => {
                if(r==selectedDistrict){
                    locatedResturants.push(resturant)
                    setResturant(locatedResturants)
                    setIsClicked(true)
                }
            })))
        }
    }

    return (
        <div className='main-location'>            
            <div className='location-selector'>
                <div>
                    <label>Select your city</label>
                    <select value={selectedCity} onChange={changeCity}>
                        <option value='Budapest'>Budapest</option>
                        <option value='Debrecen'>Debrecen</option>
                        <option value='Nyíregyháza'>Nyíregyháza</option>
                        <option value='Pécs'>Pécs</option>
                        <option value='Békéscsaba'>Békéscsaba</option>
                        <option value='Szeged'>Szeged</option>
                    </select>
                </div>
                { selectedCity === 'Budapest' && 
                    <div>
                        <label>Select your district</label>
                        <select value={selectedDistrict} onChange={changeDistrict}>
                            <option value='1'>District 1</option>
                            <option value='2'>District 2</option>
                            <option value='3'>District 3</option>
                            <option value='4'>District 4</option>
                            <option value='5'>District 5</option>
                            <option value='6'>District 6</option>
                            <option value='7'>District 7</option>
                            <option value='8'>District 8</option>
                            <option value='9'>District 9</option>
                            <option value='10'>District 10</option>
                            <option value='11'>District 11</option>
                            <option value='12'>District 12</option>
                            <option value='13'>District 13</option>
                            <option value='14'>District 14</option>
                            <option value='15'>District 15</option>
                            <option value='16'>District 16</option>
                            <option value='17'>District 17</option>
                            <option value='18'>District 18</option>
                            <option value='19'>District 19</option>
                            <option value='20'>District 20</option>
                            <option value='21'>District 21</option>
                            <option value='22'>District 22</option>
                            <option value='23'>District 23</option>
                        </select>
                    </div>
                }
            </div>
            <div className='location-selector'>
                <div className="box-2">
                    <div className='btn-2 btn-three' onClick={showLocatedResturants}>
                        Show resturants at {selectedCity} {selectedCity === 'Budapest' ? 'Dist. ' + selectedDistrict  : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LocationSelector