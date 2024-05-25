
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import AnimalGalleryPage from './pages/AnimalGalleryPage';
import AdminPage from './pages/AdminPage';
import CreateAnimalPage from './pages/CreateAnimalPage';
import EditAnimalPage from './pages/EditAnimalPage';

import './index.css';



const App = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/create" element={<CreateAnimalPage />} />
          <Route path="/admin/edit/:id" element={<EditAnimalPage />} />
          <Route path="/animals/:type" element={<AnimalGalleryPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
