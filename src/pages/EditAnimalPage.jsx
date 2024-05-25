import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

const EditAnimalPage = () => {
  // State to store the form data
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    origin: '',
    image: '',
  });

  // Retrieve the animal ID from the URL params
  const { id } = useParams();

  // Fetch animal data from the backend when the component mounts
  useEffect(() => {
    const fetchAnimalData = async () => {
      try {
        const response = await axiosInstance.get(`/animals/${id}`);
        // Populate the form data with the fetched animal data
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching animal data:', error);
      }
    };

    fetchAnimalData();
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`/animals/${id}`, formData);
      alert('Animal data updated successfully');
     
    } catch (error) {
      console.error('Error updating animal data:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Edit Animal</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-bold mb-2">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-sm font-bold mb-2">Type</label>
          <input type="text" id="type" name="type" value={formData.type} onChange={handleChange} className="border p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="origin" className="block text-sm font-bold mb-2">Origin</label>
          <input type="text" id="origin" name="origin" value={formData.origin} onChange={handleChange} className="border p-2 w-full" />
        </div>
      
        <button type="submit" className="bg-gray-800 text-white py-2 px-4">Save Changes</button>
      </form>
    </div>
  );
};

export default EditAnimalPage;
