// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axiosInstance from '../api/axiosInstance'; 

// const AnimalGalleryPage = () => {
//   const { type } = useParams();
//   const [animals, setAnimals] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchAnimalsByType = async () => {
//       try {
//         const response = await axiosInstance.get(`/animals/searchType/${type}`);
//         setAnimals(response.data);
//       } catch (error) {
//         console.error('Error fetching animals:', error);
//       }
//     };

//     fetchAnimalsByType();
//   }, [type]);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axiosInstance.get(`/animals/search/${searchTerm}`);
//       setAnimals(response.data);
//     } catch (error) {
//       console.error('Error searching animals:', error);
//     }
//   };

//   return (
//     <div>
//       <h1 className="text-2xl mb-4">{type.charAt(0).toUpperCase() + type.slice(1)} Gallery</h1>

//       <div className="flex justify-end mb-4">
//         <form onSubmit={handleSearch} className="flex">
//           <input
//             type="text"
//             placeholder="Search by name"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="border p-2 mr-2"
//           />
//           <button type="submit" className="bg-gray-800 text-white p-2">Search</button>
//         </form>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
//         {animals.map((animal) => (
//           <div key={animal._id} className="border p-4">
//             <img src={animal.imageUrl} alt={animal.name} className="w-full h-48 object-cover mb-4" />
//             <h2 className="text-xl">{animal.name}</h2>
//             <p>{animal.origin}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AnimalGalleryPage;




// AnimalGalleryPage.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AnimalCard from "../components/AnimalCard";
// import SearchBar from '../components/SearchBar';


// const AnimalGalleryPage = ({ type }) => {
//   const [animals, setAnimals] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchAnimalsByType = async () => {
//       try {
//         const response = await axios.get(`/animals/searchType/${type}`);
//         setAnimals(response.data);
//       } catch (error) {
//         console.error('Error fetching animals by type:', error);
//       }
//     };

//     fetchAnimalsByType();
//   }, [type]);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`/animals/searchName/${searchTerm}`);
//       setAnimals(response.data);
//     } catch (error) {
//       console.error('Error searching animals by name:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>{`${type.charAt(0).toUpperCase() + type.slice(1)} Gallery`}</h1>
//       <SearchBar
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         onSubmit={handleSearch}
//       />
//       <div className="animal-gallery">
//         {animals.map(animal => (
//           <AnimalCard key={animal._id} animal={animal} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AnimalGalleryPage;




import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance'; 
import AnimalCard from '../components/AnimalCard';
import AnimalPopup from '../components/AnimalPopup';

const AnimalGalleryPage = () => {
  const { type } = useParams();
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  useEffect(() => {
    fetchAnimals();
  }, [type]);

  const fetchAnimals = async () => {
    try {
      console.log('Fetching animals of type:', type); 
      const response = await axiosInstance.get(`/animals/searchType/${type}`);
      console.log('Fetched animals:', response.data); 

      setAnimals(response.data);
      setFilteredAnimals(response.data);
    } catch (error) {
      console.error('Failed to fetch animals', error);
    }
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredAnimals(animals.filter(animal => animal.name.toLowerCase().includes(term)));
  };

  const handleCardClick = (animal) => {
    setSelectedAnimal(animal);
  };

  const closePopup = () => {
    setSelectedAnimal(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{type.charAt(0).toUpperCase() + type.slice(1)} Gallery</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-2 mb-4 border rounded"
      />
      <div className="flex flex-wrap gap-4">
        {filteredAnimals.map(animal => (
          <AnimalCard key={animal._id} animal={animal} onClick={() => handleCardClick(animal)} />
        ))}
      </div>
      {selectedAnimal && <AnimalPopup animal={selectedAnimal} onClose={closePopup} />}
    </div>
  );
};

export default AnimalGalleryPage;







