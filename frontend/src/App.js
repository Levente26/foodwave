import './App.css';
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Components/Homepage';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Cart from './Components/Cart';
import Resturants from './Components/Resturants';
import Purchase from './Components/Purchase';
import Navbar from './Components/Navbar';
import SelectedResturant from './Components/SelectedResturant';

const App = () => {
  const [resturant, setResturant] = useState(null)
  const [selectedResturant, setSelectedResturant] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [name, setName] = useState('')
  const [cartItemsNum, setCartItemsNum] = useState(0)
  console.log(cartItemsNum)

  return (
    <BrowserRouter>
      <Navbar 
        setIsLoggedIn={setIsLoggedIn} 
        isLoggedIn={isLoggedIn} 
        setName={setName} 
        name={name}
        cartItemsNum={cartItemsNum} 
      />
      <main>
        <Routes>
          <Route path='/' element={<Homepage isLoggedIn={isLoggedIn} setResturant={setResturant} />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} setName={setName} />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/cart' element={<Cart cartItemsNum={cartItemsNum} setCartItemsNum={setCartItemsNum} isLoggedIn={isLoggedIn} />} />
          <Route path='/resturants' element={<Resturants allresturant={resturant} setSelectedResturant={setSelectedResturant} />} />
          <Route path='/selected-resturant' element={<SelectedResturant cartItemsNum={cartItemsNum} setCartItemsNum={setCartItemsNum} name={name} isLoggedIn={isLoggedIn} selected={selectedResturant} />} />
          <Route path='/purchase' element={<Purchase />} />
        </Routes>
      </main>  
    </BrowserRouter>
  );
}

export default App;