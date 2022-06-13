import './App.css';
import { useState, useEffect } from 'react';
import Tours from './components/Tours'
import IsLoading from './components/IsLoading';

const url = "https://course-api.com/react-tours-project"

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setIsLoading(true);
    try{
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setIsLoading(false);
    } 
    catch(error){
      setIsLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    fetchTours();
  }, [])

  const removeTour = (id) => {
    const filteredTours = tours.filter((tour) => tour.id !== id);
    setTours(filteredTours); 
  }

  if(isLoading)
  {
    return (
      <main>
        <h2 className='center'><IsLoading /></h2>
      </main>
    )
  }
  
  if(tours.length === 0)
  {
    return (
      <main>
        <div className='center'>
          <h2>No tours left</h2>
          <button onClick={() => {fetchTours()}}>Refresh</button>
        </div>
      </main>
    )
  }
  return (
    <main>
      {
        error && <h1>{error}</h1>
      }
      <Tours tours={tours} onRemoveTour={removeTour}/>
    </main>
  );
}

export default App;
