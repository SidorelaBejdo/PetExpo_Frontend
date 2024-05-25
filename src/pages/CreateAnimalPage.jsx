import React, { useState } from 'react';
import axiosInstance from '../api/axiosInstance'; 

const CreateAnimalPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    origin: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/animals', formData);
      alert('Animal created successfully');
      setFormData({  // Clearing the form data
        name: '',
        type: '',
        origin: '',
        image: '',
      });
    } catch (error) {
      console.error('Error creating animal:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Create New Animal</h1>
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
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-bold mb-2">Image URL</label>
          <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} className="border p-2 w-full" />
        </div>
        <button type="submit" className="bg-gray-800 text-white py-2 px-4">Create Animal</button>
      </form>
    </div>
  );
};

export default CreateAnimalPage;
