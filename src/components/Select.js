import React, { useState, useEffect } from 'react';
import getBreeds from '../helpers/getBreeds';

const initialBreeds = [
  {
    id:1,
    name: 'Boxer'
  },
  {
    id:2,
    name: 'Husky'
  },
];

const Select = ({ updateDog }) => {
  const [breeds, setBreeds] = useState(initialBreeds);
  const [error, setError] = useState(null);

  useEffect(() => {
    updateBreeds();
  }, []);

  const updateBreeds = () => {
    getBreeds()
        .then((newBreeds) => {
          setBreeds(newBreeds);
        })
        .catch((error) => {
          console.log(error);
          setError("Error al cargar las razas");
        })
  }

  return (
    <select onChange={(e) => updateDog(e.target.value)}>
      {breeds.map(breed => (
        <option value={breed.id} key={breed.id}>
          {breed.name}
        </option>
      ))}    
    </select>
  )
}

export default Select;

//value in options is an ID
//breeds is state and setbreeds is function of actualize
//When renderize with Map, we need a key that diference the option(ID)
//updateBreeds was created for tell the function of helpers, the same that we tell at the API, used then when the function is okay