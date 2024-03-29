import React from 'react';
import { Link } from 'react-router-dom';
import './Webpage.css';

function HomePage() {
  return (
    <div>
      <header>
        <h1 className='bar'>Deakin</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        {/* Add the search bar here */}
        <div className="search-bar">
          <Link className="log" to="/login">Log In</Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;