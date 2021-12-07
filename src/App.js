import './css/styles.css';
import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import About from './pages/About';
// import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <>
      <Navbar />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
