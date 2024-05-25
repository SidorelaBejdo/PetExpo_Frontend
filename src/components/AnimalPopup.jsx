import React from 'react';

const AnimalPopup = ({ animal, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded">Close</button>
        <img src={animal.image} alt={animal.name} className="w-full h-48 object-cover mb-4" />
        <h2 className="text-2xl font-bold mb-2">{animal.name}</h2>
        <p><strong>Origin:</strong> {animal.origin}</p>
        <p><strong>Description:</strong> {animal.description}</p>
      </div>
    </div>
  );
};

export default AnimalPopup;
