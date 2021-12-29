import { useState,useEffect } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Order = ( { username } ) => {
    const [purchaseItems, setPurchaseItems] = useState(null)
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [email, setEmail] = useState('')
    const [cash, setCash] = useState(true)
    const [card, setCard] = useState(false)
    const [message, setMessage] = useState(null)
    const [errMessage, setErrMessage] = useState(null)
    const navigate = useNavigate()

    console.log(purchaseItems)
    useEffect(() => {
        const getPurchaseItems = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/cartitems/${username}`)
                setPurchaseItems(response.data)
                
            } catch (err) {
                console.log(err.response)
            }
        }
        getPurchaseItems()
    },[])

    const changeName = (e) => {
        setName(e.target.value)
    }
    const changeAddress = (e) => {
        setAddress(e.target.value)
    }
    const changePhonenumber = (e) => {
        setPhonenumber(e.target.value)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changeCash = () => {
        setCash(true)
        setCard(false)
    }
    const changeCard = () => {
        setCard(true)
        setCash(false)
    }

    const order = async() => {
        const resturant = purchaseItems.map(item => item.resturant)
        const products = purchaseItems.map(item => item.product)
        if(name !== '' && address !== '' && phonenumber !== '' && email !== ''){
            if(card){
                const data ={ 
                    name: name, 
                    address: address, 
                    phonenumber: phonenumber, 
                    email: email, 
                    payment:'creditcard',
                    resturant: resturant,
                    products: products
                }
                try {
                    const response =  await axios.post('http://localhost:5000/order', data)
                    console.log(response.data)
                    setMessage(response.data.msg)
                    setTimeout(() => {
                        navigate('/')
                    },5000)
                } catch (err) {
                    console.log(err)
                    setErrMessage(err.response.data.msg)
                }
            }
            else if(cash){
                const data ={ 
                    name: name, 
                    address: address, 
                    phonenumber: phonenumber, 
                    email: email, 
                    payment:'cash',
                    resturant: resturant,
                    products: products
                }                
                try {
                    const response = await axios.post('http://localhost:5000/order', data)
                    console.log(response)
                    setMessage(response.data.msg)
                    setTimeout(() => {
                        navigate('/')
                    },5000)
                } catch (err) {
                    console.log(err)
                    setErrMessage(err.response.data.msg)
                }
            }
        } else{
            setErrMessage('Something went wrong, please try again')
        }
    }

    return(
        <div className="order">
            <form action='/purchase' method="POST">
                <label>Enter your name</label>
                <input type='text' value={name} onChange={changeName} required />

                <label>Enter your address</label>
                <input type='text' value={address} onChange={changeAddress} required />

                <label>Enter your phonenumber</label>
                <input type='text' value={phonenumber} onChange={changePhonenumber} required />

                <label>Enter your email address</label>
                <input type='text' value={email} onChange={changeEmail} required />

                <div className="payment">
                    <label>Payment</label>
                    <div className="radiobtn">
                        <div>
                            <input type='radio' checked={cash} value={cash} onChange={changeCash} /> Cash
                        </div>
                        <div>
                            <input type='radio' checked={card} value={card} onChange={changeCard} /> Credit card
                        </div>
                    </div>
                </div>
                
                {message !== '' && <p className="msg">{message}</p>}
                {errMessage !== '' && <p className="errmsg">{errMessage}</p>}
            </form>

            <div className="box-10">
                <div className='btn-10 btn-three' onClick={order}>Order</div>
            </div>
        </div>
    )
}
export default Order