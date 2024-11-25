import React, { useState } from 'react';
import './Cats.css';
import Modal from './Modal'; 

const Cats = () => {
  const cats = [
    {id: 1, name: 'Whiskers', age: 3, breed: 'Siamese', color: "Grey black", availableForAdoption: true, image: 'Whiskers.jpeg'},
    {id: 2, name: 'Luna', age: 2, breed: 'Maine Coon', availableForAdoption: false, image: 'luna.jpeg'},
    {id: 3, name: 'Simba', age: 4, breed: 'Persian', availableForAdoption: true, image: 'simba.jpeg'},
    {id: 4, name: 'Bella', age: 1, breed: 'Tabby', availableForAdoption: true, image: 'bella.jpeg'},
    {id: 5, name: 'Oliver', age: 2, breed: 'Ragdoll', availableForAdoption: false, image: 'oliver.jpeg'},
    {id: 6, name: 'Shadow', age: 5, breed: 'Russian Blue', availableForAdoption: true, image: 'shadow.jpeg'},
    {id: 7, name: 'Daisy', age: 3, breed: 'Scottish Fold', availableForAdoption: true, image: 'daisy.jpeg'},
    {id: 8, name: 'Milo', age: 2, breed: 'Sphynx', availableForAdoption: false, image: 'milo.jpeg'},
    {id: 9, name: 'Lucy', age: 4, breed: 'Bengal', availableForAdoption: true, image: 'lucy.jpeg'},
    {id: 10, name: 'Tiger', age: 3, breed: 'Siberian', availableForAdoption: true, image: 'tiger.jpeg'},
    {id: 11, name: 'Oreo', age: 2, breed: 'American Shorthair', availableForAdoption: false, image: 'oreo.jpeg'},
    {id: 12, name: 'Smokey', age: 4, breed: 'British Shorthair', availableForAdoption: true, image: 'smokey.jpeg'},
    {id: 13, name: 'Coco', age: 1, breed: 'Norwegian Forest', availableForAdoption: true, image: 'coco.jpeg'},
    {id: 14, name: 'Ginger', age: 3, breed: 'Calico', availableForAdoption: false, image: 'ginger.jpeg'},
    {id: 15, name: 'Leo', age: 2, breed: 'Himalayan', availableForAdoption: true, image: 'leo.jpeg'},
    {id: 16, name: 'Mittens', age: 5, breed: 'Manx', availableForAdoption: true, image: 'mittens.jpeg'},
    {id: 17, name: 'Socks', age: 3, breed: 'Sphynx', availableForAdoption: false, image: 'socks.jpeg'},
    {id: 18, name: 'Sassy', age: 2, breed: 'Tonkinese', availableForAdoption: true, image: 'sassy.jpeg'},
    {id: 19, name: 'Fiona', age: 4, breed: 'Scottish Fold', availableForAdoption: false, image: 'fiona.jpeg'},
    {id: 20, name: 'Whiskers', age: 3, breed: 'Siamese', availableForAdoption: true, image: 'whiskers.jpeg'},
  ];

  const [selectedCat, setSelectedCat] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('name');

  const handleCatClick = (cat) => {
    setSelectedCat(cat);
  };

  const handleCloseModal = () => {
    setSelectedCat(null);
  };

  const filteredCats = cats.filter((cat) =>
  cat[searchBy] && cat[searchBy].toLowerCase().includes(searchTerm.toLowerCase())
);


  return (
    <div className="cats-container">
      <h2>Cats</h2>
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
      <div className="cat-list">
        {filteredCats.map((cat) => (
          <div
            key={cat.id}
            className="cat-profile"
            onClick={() => handleCatClick(cat)}
          >
            <img
              src={`${process.env.PUBLIC_URL}/cats/${cat.image}`}
              alt={cat.name}
            />
          </div>
        ))}
      </div>
      {selectedCat && (
        <Modal cat={selectedCat} onClose={handleCloseModal}>
          <h2>{selectedCat.name}</h2>
          <img
            src={`${process.env.PUBLIC_URL}/cats/${selectedCat.image}`}
            alt={selectedCat.name}
          />
          <div className="modal-info">
            <p>Age: {selectedCat.age}</p>
            <p>Breed: {selectedCat.breed}</p>
            <p>Color: {selectedCat.color}</p>
            <p>
              {selectedCat.availableForAdoption
                ? 'Available for adoption'
                : 'Not available for adoption'}
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Cats;