import { useState,useEffect } from "react"
import axios from 'axios'

const Purchase = () => {
    const [purchaseItems, setPurchaseItems] = useState(null)
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [email, setEmail] = useState('')
    const [cash, setCash] = useState(true)
    const [card, setCard] = useState(false)

    console.log(purchaseItems)
    useEffect(() => {
        const getPurchaseItems = async () => {
            try {
                const response = await axios.get('http://localhost:5000/cartitems')
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
                    const response = axios.post('http://localhost:5000/order', data)
                    console.log(response)
                } catch (err) {
                    console.log(err)
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
                    const response = axios.post('http://localhost:5000/purchase', data)
                    console.log(response)
                } catch (err) {
                    console.log(err)
                }
            }
        }
    }

    return(
        <div style={{marginTop:'5rem'}}>
            <form action='/purchase' method="POST">
                <label>Enter your name</label>
                <input type='text' value={name} onChange={changeName} required />
                <label>Enter your address</label>
                <input type='text' value={address} onChange={changeAddress} required />
                <label>Enter your phonenumber</label>
                <input type='text' value={phonenumber} onChange={changePhonenumber} required />
                <label>Enter your email address</label>
                <input type='text' value={email} onChange={changeEmail} required />
                <div>
                    <label>Payment</label>
                    <input type='radio' checked={cash} value={cash} onChange={changeCash} />
                    <input type='radio' checked={card} value={card} onChange={changeCard} />
                </div>
            </form>
            <div onClick={order}>Order</div>
        </div>
    )
}
export default Purchase