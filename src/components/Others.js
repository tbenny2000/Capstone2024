import React, { useState } from 'react';
import './Others.css';
import Modal from './Modal';

const Others = () => {
  const otherAnimals = [
    { id: 1, name: 'Rabbit', type: 'Mammal', habitat: 'Fields and forests', image: 'rabbit.jpeg' },
    { id: 2, name: 'Parrot', type: 'Bird', habitat: 'Tropical rainforests', image: 'parrot.jpeg' },
    { id: 3, name: 'Turtle', type: 'Reptile', habitat: 'Oceans and ponds', image: 'turtle.jpeg' },
    { id: 4, name: 'Goldfish', type: 'Fish', habitat: 'Aquariums and ponds', image: 'goldfish.jpeg' },
    { id: 5, name: 'Hamster', type: 'Mammal', habitat: 'Cages and burrows', image: 'hamster.jpeg' },
    { id: 6, name: 'Horse', type: 'Mammal', habitat: 'Fields and pastures', image: 'horse.jpeg' },
    { id: 7, name: 'Snake', type: 'Reptile', habitat: 'Various habitats', image: 'snake.jpeg' },
    { id: 8, name: 'Spider', type: 'Arachnid', habitat: 'Webs and dark places', image: 'spider.jpeg' },
    { id: 9, name: 'Frog', type: 'Amphibian', habitat: 'Ponds and wetlands', image: 'frog.jpeg' },
    { id: 10, name: 'Guinea Pig', type: 'Mammal', habitat: 'Cages and grassy areas', image: 'guinea_pig.jpeg' },
    { id: 11, name: 'Lizard', type: 'Reptile', habitat: 'Deserts and forests', image: 'lizard.jpeg' },
    { id: 12, name: 'Fish', type: 'Fish', habitat: 'Various aquatic environments', image: 'fish.jpeg' },
  ];

 const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('name');

  const handleAnimalClick = (animal) => {
    setSelectedAnimal(animal);
  };

  const handleCloseModal = () => {
    setSelectedAnimal(null);
  };

  const filteredAnimals = otherAnimals.filter((animal) =>
    animal[searchBy] && animal[searchBy].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="others-container">
      <h2>Other Animals</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={(e) => setSearchBy(e.target.value)}>
          <option value="name">Name</option>
          <option value="type">Type</option>
          <option value="habitat">Habitat</option>
        </select>
      </div>
      <div className="other-animal-list">
        {filteredAnimals.map((animal) => (
          <div
            key={animal.id}
            className="other-animal-profile"
            onClick={() => handleAnimalClick(animal)}
          >
            <img src={`${process.env.PUBLIC_URL}/others/${animal.image}`} alt={animal.name} />
          </div>
        ))}
      </div>
      {selectedAnimal && (
        <Modal animal={selectedAnimal} onClose={handleCloseModal}>
          <h2 className="modal-name">{selectedAnimal.name}</h2>
          <div className="modal-image">
            <img
              src={`${process.env.PUBLIC_URL}/others/${selectedAnimal.image}`}
              alt={selectedAnimal.name}
            />
          </div>
          <div className="modal-info">
            <p>Type: {selectedAnimal.type}</p>
            <p>Habitat: {selectedAnimal.habitat}</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Others;