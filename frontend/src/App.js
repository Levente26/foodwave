import './App.css';
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Components/Homepage';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Cart from './Components/Cart';
import Resturants from './Components/Resturants';
import Order from './Components/Order';
import Navbar from './Components/Navbar';
import SelectedResturant from './Components/SelectedResturant';
import LocationSelector from './Components/LocationSelector';
import About from './Components/About';

const App = () => {
  const [resturant, setResturant] = useState(null)
  const [selectedResturant, setSelectedResturant] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [name, setName] = useState('')
  const [cartItemsNum, setCartItemsNum] = useState(0)

  return (
    <BrowserRouter>
      <Navbar 
        setIsLoggedIn={setIsLoggedIn} 
        isLoggedIn={isLoggedIn} 
        setName={setName} 
        name={name}
        cartItemsNum={cartItemsNum} 
        setCartItemsNum={setCartItemsNum}
      />
      <main>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/location' element={<LocationSelector setResturant={setResturant} />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} setName={setName} />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/cart' element={<Cart name={name} cartItemsNum={cartItemsNum} setCartItemsNum={setCartItemsNum} isLoggedIn={isLoggedIn} />} />
          <Route path='/resturants' element={<Resturants allresturant={resturant} setSelectedResturant={setSelectedResturant} />} />
          <Route path='/selected-resturant' element={<SelectedResturant cartItemsNum={cartItemsNum} setCartItemsNum={setCartItemsNum} name={name} isLoggedIn={isLoggedIn} selected={selectedResturant} />} />
          <Route path='/order' element={<Order username={name} />} />
        </Routes>
      </main>  
    </BrowserRouter>
  );
}

export default App;