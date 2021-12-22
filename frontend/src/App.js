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

function App() {
  const [resturant, setResturant] = useState(null)

  return (
     <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Homepage setResturant={setResturant} />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/resturants' element={<Resturants resturant={resturant}/>} />
          <Route path='/purchase' element={<Purchase />} />
        </Routes>
      </main>  
     </BrowserRouter>
  );
}

export default App;