import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import NewsGrid from './components/NewsGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Navbar />
      <HeroSection />
      <NewsGrid />
      <Footer />
    </div>
  );
}

export default App;
