import './css/styles.css';
import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

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
