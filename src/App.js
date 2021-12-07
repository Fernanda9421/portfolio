import './css/styles.css';
import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
