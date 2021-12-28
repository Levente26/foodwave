import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    const navigate = useNavigate()

    const navigateAbout = () => {
        navigate('/about')
    }
    const navigateLocation = () => {
        navigate('/location')
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
                
                <div className='navigatebtns'>
                    <div className='box-11'>
                        <div className='btn-11 btn-three' onClick={navigateLocation}>Select location</div>
                    </div>
                    <div className='box-11'>
                        <div className='btn-11 btn-three' onClick={navigateAbout}>About functionality</div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Homepage