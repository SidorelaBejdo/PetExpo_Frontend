
import React from 'react';

const AnimalCard = ({ animal, onClick }) => {
  return (
    <div className="w-48 border p-4 cursor-pointer" onClick={onClick}>
      <img src={animal.image} alt={animal.name} className="w-full h-32 object-cover" />
      <h3 className="mt-2 text-lg font-semibold">{animal.name}</h3>
      <p className="text-gray-600">{animal.origin}</p>
    </div>
  );
};

export default AnimalCard;

