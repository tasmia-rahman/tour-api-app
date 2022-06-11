import './App.css';
import { useState, useEffect } from 'react';
import Tours from './components/Tours'

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
  
  if(tours.length === 0)
  {
    return (
      <main>
        <div>
          <h2>No tours left</h2>
          <button onClick={() => {fetchTours()}}>Refresh</button>
        </div>
      </main>
    )
  }
  return (
    <main>
      {
        isLoading && <h1>Loading...</h1>
      }
      {
        error && <h1>{error}</h1>
      }
      <Tours tours={tours} />
    </main>
  );
}

export default App;
