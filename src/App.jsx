import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import HomePage from '../src/components/Homepage';
import AboutPage from '../src/components/AboutPage';
import ContactPage from '../src/components/ContactPage';
import CoursesPage from '../src/components/CoursesPage';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/courses" element={<CoursesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
