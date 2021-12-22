import { resturants } from '../resturants';
import LocationSelector from "./LocationSelector"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const Homepage = ( { setResturant } ) => {
    const navigate = useNavigate()
    const [allResturant, setAllResturant] = useState(resturants)
    const [isClicked, setIsClicked] = useState(false)

    const showAllResturants = () => {
        setIsClicked(false)
        setResturant(allResturant)
        setTimeout(() => {
            navigate('/resturants')
        },0)
    }
    if(isClicked){
        setResturant(allResturant)
        setTimeout(() => {
            navigate('/resturants')
        },0)
    }
    console.log(allResturant)
    return (
        <div className='home'>
            <section className="header">
                <h1 className="main-title">Food wave</h1>
                <button onClick={showAllResturants}>Show all resturants</button>
            </section>
            <section>
                <h2 className='subtitle'>Select your location</h2>
                <LocationSelector resturants={allResturant} setResturant={setAllResturant} setIsClicked={setIsClicked} />
            </section>
            <section>
                <h2>Our story</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fuga fugit enim, quasi inventore voluptates voluptatum reprehenderit fugiat corporis commodi nostrum facere dolores blanditiis at tenetur, dicta veritatis nisi quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur totam unde a esse placeat! Modi voluptatibus sint asperiores fugiat iste. Qui labore aperiam dolorum ullam id illo obcaecati asperiores. Debitis!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veritatis neque nam, magni culpa magnam maiores obcaecati a? Ipsa esse porro facere? Quasi consectetur laborum dolorum esse quam. Ipsam, beatae?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis molestiae sit, aut asperiores dolorum id, dolor iste fugit deleniti dolorem repellendus ipsum rerum optio facere, hic suscipit? Distinctio, obcaecati dolor?</p>
            </section>
        </div>
    )
}
export default Homepage