import React from 'react';
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <header>
      <Link to="/" className='logo'><i className="fas fa-blog"></i>Portfolio</Link>
      <nav>
        <Link to="/WeatherApp">WeatherApp</Link>
        <Link to="/TodoApp">TodoApp</Link>
        <Link to="/RecipesApp">RecipesApp</Link>
        <div className='hamburger'><i className="fas fa-bars"></i></div>
      </nav>
    </header>
  )
}

export default Navigation
