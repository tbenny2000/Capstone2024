import React from 'react';
import { useParams } from 'react-router-dom';

const PetDetails = () => {
  const { id } = useParams();

  // Fetch pet details based on the ID from your data
  return (
    <div>
      <h2>Pet Details</h2>
      <p>Details for pet with ID {id}</p>
    </div>
  );
};
export default PetDetails;