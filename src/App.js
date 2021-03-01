import React, { useState, useEffect} from 'react';
import Card from './components/Card';
import Select from './components/Select';
import getDog from './helpers/getDog';

const initialDog = {
  image: "",
  breed: {
    id: 1,
    name: "Labrador"
  }
}

function App() {
  const [dog, setDog] = useState(initialDog);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    updateDog();
  }, []);

  const updateDog = (breedId) => {
    setLoading(true);
    getDog(breedId)
      .then((newDog) => {
        setDog(newDog);
        setLoading(false);
      })
  }

  return (
    <div className="App">
      <Select updateDog={updateDog}/>


      <Card dog={dog} updateDog={updateDog} loading={loading}/>
    </div>
  );
}

export default App;
