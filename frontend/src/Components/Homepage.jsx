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
        navigate('/resturants')
    }
    if(isClicked){
        setResturant(allResturant)
        navigate('/resturants')
    }

    return (
        <div className='home'>
            <section className="header">
            <div className="waveWrapper waveAnimation">
                <div className="waveWrapperInner bgTop">
                    <div className="wave waveTop" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-top.png')"}}></div>
                </div>
                <div className="waveWrapperInner bgMiddle">
                    <div className="wave waveMiddle" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-mid.png')"}}></div>
                </div>
                <div className="waveWrapperInner bgBottom">
                    <div className="wave waveBottom" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-bot.png')"}}></div>
                </div>
            </div>
            <div className="content">
                <h1>FoodWave</h1>
                <h1>FoodWave</h1>
            </div>
            </section>
            <section className='selector-section'>
            <div className="box">
                <div className='btn btn-three' onClick={showAllResturants}>Show all resturants</div>
            </div>
                <div className="content-2">
                    <h1>Select your location</h1>
                    <h1>Select your location</h1>
                </div>
                <div className='location'>
                    <LocationSelector resturants={allResturant} setResturant={setAllResturant} setIsClicked={setIsClicked} />
                </div>
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