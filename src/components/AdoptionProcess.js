import React from 'react';

const AdoptionProcess = () => {
  return (
    <div className="adoption-process-container">
      <p>Adoption Application Online - Fill in Form</p>
      <a
        href="https://form.jotform.com/63622541099155"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: 'white',
          backgroundColor: 'blue',
          padding: '5px 10px',
          border: '2px solid white',
          borderRadius: '5px',
          textDecoration: 'none', // Remove underline
        }}
      >
        Adoption Application (Click Here)
      </a>
    </div>
  );
};

export default AdoptionProcess;