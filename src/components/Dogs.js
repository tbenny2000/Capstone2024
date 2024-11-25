import React, { useState } from 'react';
import './Dogs.css';
import Modal from './Modal'; 

const Dogs = () => {
  const dogs = [
    {id: 1, name: 'Buddy', age: 3, breed: 'Labrador Retriever', availableForAdoption: true, image: 'buddy.jpeg'},
    {id: 2, name: 'Bailey', age: 2, breed: 'Golden Retriever', availableForAdoption: false, image: 'bailey.jpeg'},
    {id: 3, name: 'Max', age: 4, breed: 'German Shepherd', availableForAdoption: true, image: 'max.jpeg'},
    {id: 4, name: 'Charlie', age: 5, breed: 'Poodle', availableForAdoption: false, image: 'charlie.jpeg'},
    {id: 5, name: 'Lucy', age: 2, breed: 'Beagle', availableForAdoption: true, image: 'lucy.jpeg'},
    {id: 6, name: 'Rocky', age: 3, breed: 'Boxer', availableForAdoption: true, image: 'rocky.jpeg'},
    {id: 7, name: 'Daisy', age: 1, breed: 'Dachshund', availableForAdoption: true, image: 'daisy.jpeg'},
    {id: 8, name: 'Cooper', age: 2, breed: 'Bulldog', availableForAdoption: false, image: 'cooper.jpeg'},
    {id: 9, name: 'Sadie', age: 4, breed: 'Cocker Spaniel', availableForAdoption: true, image: 'sadie.jpeg'},
    {id: 10, name: 'Zoro', age: 3, breed: 'Boxer', availableForAdoption: true, image: 'zoro.jpeg'},
    {id: 11, name: 'Zoe', age: 2, breed: 'Siberian Husky', availableForAdoption: false, image: 'zoe.jpeg'},
    {id: 12, name: 'Duke', age: 5, breed: 'Rottweiler', availableForAdoption: true, image: 'duke.jpeg'},
    {id: 13, name: 'Molly', age: 1, breed: 'Shih Tzu', availableForAdoption: true, image: 'molly.jpeg'},
    {id: 14, name: 'Toby', age: 4, breed: 'Australian Shepherd', availableForAdoption: false, image: 'toby.jpeg'},
    {id: 15, name: 'Lady', age: 2, breed: 'Border Collie', availableForAdoption: true, image: 'lady.jpeg'},
    {id: 16, name: 'Bentley', age: 3, breed: 'Great Dane', availableForAdoption: true, image: 'bentley.jpeg'},
    {id: 17, name: 'Sophie', age: 1, breed: 'Pomeranian', availableForAdoption: false, image: 'sophie.jpeg'},
    {id: 18, name: 'Riley', age: 2, breed: 'Shiba Inu', availableForAdoption: true, image: 'riley.jpeg'},
    {id: 19, name: 'Batman', age: 4, breed: 'Doberman Pinscher', availableForAdoption: false, image: 'batman.jpeg'},
    {id: 20, name: 'Oscar', age: 5, breed: 'Bernese Mountain Dog', availableForAdoption: true, image: 'oscar.jpeg'},
  ];

const [selectedDog, setSelectedDog] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('name');

  const handleDogClick = (dog) => {
    setSelectedDog(dog);
  };

  const handleCloseModal = () => {
    setSelectedDog(null);
  };

  const filteredDogs = dogs.filter((dog) =>
    dog[searchBy] && dog[searchBy].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dogs-container">
      <h2>Dogs</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={(e) => setSearchBy(e.target.value)}>
          <option value="breed">Breed</option>
          <option value="name">Name</option>
          <option value="color">Color</option>
        </select>
      </div>
      <div className="dog-list">
        {filteredDogs.map((dog) => (
          <div
            key={dog.id}
            className="dog-profile"
            onClick={() => handleDogClick(dog)}
          >
            <img
              src={`${process.env.PUBLIC_URL}/dogs/${dog.image}`}
              alt={dog.name}
            />
          </div>
        ))}
      </div>
      {selectedDog && (
        <Modal dog={selectedDog} onClose={handleCloseModal}>
          <h2>{selectedDog.name}</h2>
          <img
            src={`${process.env.PUBLIC_URL}/dogs/${selectedDog.image}`}
            alt={selectedDog.name}
          />
          <div className="modal-info">
            <p>Age: {selectedDog.age}</p>
            <p>Breed: {selectedDog.breed}</p>
            <p>Color: {selectedDog.color}</p>
            <p>
              {selectedDog.availableForAdoption
                ? 'Available for adoption'
                : 'Not available for adoption'}
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Dogs;