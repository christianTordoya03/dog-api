import React from 'react';

const Card = ({ dog, updateDog }) => {
  return (
    <div className="card" onClick={() => updateDog(dog.breed.id)}>
      <img 
        src={dog.image}
        alt="dog"
      />
      <p>
        {dog.breed.name}
      </p>
    </div>
  )
}

export default Card;
