import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './Authentication'
import './Webpage.css';

function Web() {
  const { logout } = useAuth();
  return (
    <div>
      <header>
        <h1 className='bar'>DEV@Deakin</h1>
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
          <input type="text" placeholder="Search..." />
          <button type="button">Search</button>
          <Link className="log" to="/" onClick={logout}>Log Out</Link>
        </div>

      </header>
    </div>
  );
}

export default Web;