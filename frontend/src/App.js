import { resturants } from './resturants';
import './App.css';

function App() {
  return (
    <div className="App">
     {resturants.map(resturant=><p>{resturant.name}</p>)}
    </div>
  );
}

export default App;
