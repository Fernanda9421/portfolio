import './css/styles.css';
import React from 'react';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/NavBar/Navbar';
import About from './pages/About/About';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';

function App() {
  return (
    <>
      <Navbar />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/about' component={ About } />
          <Route path='/portfolio' component={ Portfolio } />
        </Switch>
      <Footer />
    </>
  );
}

export default App;
