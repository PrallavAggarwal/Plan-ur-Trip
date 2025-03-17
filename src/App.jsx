import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Data from './Data'
import Tours from './components/Tours'
import './App.css'

function App() {
  const [tours, setTours] = useState(Data);

  function removeTour(id){
    const newTours = tours.filter(tour=>tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0){
    return(
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button className='btn-white' onClick={()=> setTours(Data)}>
          Refresh
        </button>
      </div>
    );

  }

  return (
    <div>
      <Tours tours = {tours} removeTour={removeTour}></Tours>
    </div>
  )
}

export default App;
