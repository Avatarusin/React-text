import React from 'react';
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <React.Fragment>
      <Link to="/"><i className="fas fa-blog"></i>Home</Link>
      <nav>
        <Link to="/WeatherApp">WeatherApp</Link>
        <Link to="/TodoApp">TodoApp</Link>
        <Link to="/RecipesApp">RecipesApp</Link>
        <div><i className="fas fa-bars"></i></div>
      </nav>
    </React.Fragment>
  )
}

export default Navigation
