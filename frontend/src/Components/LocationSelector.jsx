import Budapest from '../images/budapest.jpg'
import Debrecen from '../images/debrecen.jpg'
import Pecs from '../images/pecs.jpg'
import Bekescsaba from '../images/bekescsaba.jpg'
import Szeged from '../images/szeged.jpg'
import Nyiregyhaza from '../images/nyiregyhaza.jpg'
import { useNavigate } from 'react-router-dom'
import { resturants } from '../resturants';

const LocationSelector = ( { setResturant } ) => {
    const locatedResturants = []
    const navigate = useNavigate()

    const showLocatedResturants = (selectedCity, selectedDistrict) => {
        if(selectedCity !== 'Budapest'){
            resturants.map(resturant=> resturant.cities.filter(r => {
                if(r.cityname===selectedCity){
                    locatedResturants.push(resturant)
                    setResturant(locatedResturants)
                    navigate('/resturants')
                }
            }))
        } else {
            resturants.map(resturant=> resturant.cities.map(res => res.districts.filter(r => {
                if(r===selectedDistrict){
                    locatedResturants.push(resturant)
                    setResturant(locatedResturants)
                    navigate('/resturants')
                }
            })))
        }
    }

    return (
        <div className='location-selector'>  
            <div className='wrapper'>
                <div className="content-2">
                    <h1>Select your location</h1>
                    <h1>Select your location</h1>
                </div>
            </div>

            <div className='city-card-bp'>
                <h3>Budapest</h3>
                <img className='city-img-bp' src={Budapest} alt='' />
                <div className='districts'>
                    <div onClick={() => showLocatedResturants('Budapest', 1)} className='district'>I</div>
                    <div onClick={() => showLocatedResturants('Budapest', 2)} className='district'>II</div>
                    <div onClick={() => showLocatedResturants('Budapest', 3)} className='district'>III</div>
                    <div onClick={() => showLocatedResturants('Budapest', 4)} className='district'>IV</div>
                    <div onClick={() => showLocatedResturants('Budapest', 5)} className='district'>V</div>
                    <div onClick={() => showLocatedResturants('Budapest', 6)} className='district'>VI</div>
                    <div onClick={() => showLocatedResturants('Budapest', 7)} className='district'>VII</div>
                    <div onClick={() => showLocatedResturants('Budapest', 8)} className='district'>VIII</div>
                    <div onClick={() => showLocatedResturants('Budapest', 9)} className='district'>IX</div>
                    <div onClick={() => showLocatedResturants('Budapest', 10)} className='district'>X</div>
                    <div onClick={() => showLocatedResturants('Budapest', 11)} className='district'>XI</div>
                    <div onClick={() => showLocatedResturants('Budapest', 12)} className='district'>XII</div>
                    <div onClick={() => showLocatedResturants('Budapest', 13)} className='district'>XIII</div>
                    <div onClick={() => showLocatedResturants('Budapest', 14)} className='district'>XIV</div>
                    <div onClick={() => showLocatedResturants('Budapest', 15)} className='district'>XV</div>
                    <div onClick={() => showLocatedResturants('Budapest', 16)} className='district'>XVI</div>
                    <div onClick={() => showLocatedResturants('Budapest', 17)} className='district'>XVII</div>
                    <div onClick={() => showLocatedResturants('Budapest', 18)} className='district'>XVIII</div>
                    <div onClick={() => showLocatedResturants('Budapest', 19)} className='district'>XIX</div>
                    <div onClick={() => showLocatedResturants('Budapest', 20)} className='district'>XX</div>
                    <div onClick={() => showLocatedResturants('Budapest', 21)} className='district'>XXI</div>
                    <div onClick={() => showLocatedResturants('Budapest', 22)} className='district'>XXII</div>
                    <div onClick={() => showLocatedResturants('Budapest', 23)} className='district'>XXIII</div>
                </div>
            </div>

            <div className='city-img-selector'>
                <div onClick={() => showLocatedResturants('Debrecen')} className='city-card'>
                    <h3>Debrecen</h3>
                    <img className='city-img' src={Debrecen} alt='' />
                </div>
                <div onClick={() => showLocatedResturants('Szeged')} className='city-card'>
                    <h3>Szeged</h3>
                    <img className='city-img' src={Szeged} alt='' />
                </div>
                <div onClick={() => showLocatedResturants('Békéscsaba')} className='city-card'>
                    <h3>Békéscsaba</h3>
                    <img className='city-img' src={Bekescsaba} alt='' />
                </div>
                <div onClick={() => showLocatedResturants('Pécs')} className='city-card'>
                    <h3>Pécs</h3>
                    <img className='city-img' src={Pecs} alt='' />
                </div>
                <div onClick={() => showLocatedResturants('Nyíregyháza')} className='city-card'>
                    <h3>Nyíregyháza</h3>
                    <img className='city-img' src={Nyiregyhaza} alt='' />
                </div>
            </div>
        </div>
                
    )
}
export default LocationSelector
       