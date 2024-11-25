import React from 'react';
import { Link } from 'react-router-dom';

const PetList = () => {
  // Sample pet data
  const pets = [
    { id: 1, name: 'buddy', species: 'Dog', age: 3, image: 'buddy.jpeg' },
    // Add more pets as needed
  ];

  return (
    <div>
      <h2>Available Pets</h2>
      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>
            <Link to={`/pets/${pet.id}`}>
              <img src={pet.image} alt={pet.name} />
              <p>{pet.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetList;
