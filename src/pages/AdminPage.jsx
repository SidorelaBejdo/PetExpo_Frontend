// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axiosInstance from '../api/axiosInstance';

// const AdminPage = () => {
//   const [animals, setAnimals] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchAnimals();
//   }, []);

//   const fetchAnimals = async () => {
//     try {
//       const response = await axiosInstance.get('/animals');
//       setAnimals(response.data);
//     } catch (error) {
//       setError('Failed to fetch animals');
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this animal?')) {
//       try {
//         await axiosInstance.delete(`/animals/${id}`);
//         // Refresh the animal list after deletion
//         fetchAnimals();
//       } catch (error) {
//         console.error('Error deleting animal:', error);
//       }
//     }
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-3xl font-bold mb-4">Admin Page</h1>
      
//       {error && <p className="text-red-500">{error}</p>}
//       <table className="min-w-full bg-white border">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border-b">Name</th>
//             <th className="py-2 px-4 border-b">Type</th>
//             <th className="py-2 px-4 border-b">Origin</th>
//             <th className="py-2 px-4 border-b">Image</th>
//             <th className="py-2 px-4 border-b">Actions</th> {/* New column for actions */}
//           </tr>
//         </thead>
//         <tbody>
//           {animals.map((animal) => (
//             <tr key={animal._id}>
//               <td className="py-2 px-4 border-b">{animal.name}</td>
//               <td className="py-2 px-4 border-b">{animal.type}</td>
//               <td className="py-2 px-4 border-b">{animal.origin}</td>
//               <td className="py-2 px-4 border-b">
//                 <img src={animal.image} alt={animal.name} className="h-16 w-16 object-cover" />
//               </td>
//               <td className="py-2 px-4 border-b">
//                 <button onClick={() => handleDelete(animal._id)} className="bg-red-800 text-white p-2 mr-2">Delete</button>
//                 <Link to={`/admin/edit/${animal._id}`} className="bg-gray-800 text-white p-2">Edit</Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AdminPage;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

const AdminPage = () => {
  const [animals, setAnimals] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAnimals();
  }, []);

  const fetchAnimals = async () => {
    try {
      const response = await axiosInstance.get('/animals');
      setAnimals(response.data);
    } catch (error) {
      setError('Failed to fetch animals');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this animal?')) {
      try {
        await axiosInstance.delete(`/animals/${id}`);
        // Refresh the animal list after deletion
        fetchAnimals();
      } catch (error) {
        console.error('Error deleting animal:', error);
      }
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Admin Page</h1>
      
      {error && <p className="text-red-500">{error}</p>}
  
      <div className="flex justify-end w-full items-center mb-4">
        <Link to="/admin/create" className="bg-gray-800 text-white py-2 px-4 rounded">Create New Animal</Link>
      </div>

      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Type</th>
            <th className="py-2 px-4 border-b">Origin</th>
            <th className="py-2 px-4 border-b">Image</th>
            <th className="py-2 px-4 border-b">Actions</th> {/* New column for actions */}
          </tr>
        </thead>
        <tbody>
          {animals.map((animal) => (
            <tr key={animal._id}>
              <td className="py-2 px-4 border-b">{animal.name}</td>
              <td className="py-2 px-4 border-b">{animal.type}</td>
              <td className="py-2 px-4 border-b">{animal.origin}</td>
              <td className="py-2 px-4 border-b">
                <img src={animal.image} alt={animal.name} className="h-16 w-16 object-cover" />
              </td>
              <td className="py-2 px-4 border-b">
                <button onClick={() => handleDelete(animal._id)} className="bg-red-800 text-white p-2 mr-2">Delete</button>
                <Link to={`/admin/edit/${animal._id}`} className="bg-gray-800 text-white p-2">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;
