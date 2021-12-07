import './css/styles.css';
import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
// import Home from './pages/Home';
// import Portfolio from './pages/Portfolio';
// import Form from './pages/Form';

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  );
}

export default App;
