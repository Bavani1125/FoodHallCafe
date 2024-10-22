import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import './styles.css'; 

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Food Hall Café</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <button>Order Now</button>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <footer>
        <p>&copy; 2024 Food Hall Café</p>
      </footer>
    </Router>
  );
}

export default App;
