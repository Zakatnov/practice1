import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage/AboutPage';
import HomePage from './pages/HomePage/HomePage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/:projectId" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
