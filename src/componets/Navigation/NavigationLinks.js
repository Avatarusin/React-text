import React from 'react';
import { Link } from 'react-router-dom';
import RecipesApp from '../RecipesApp/RecipesApp'
import TodoApp from '../TodoApp/TodoApp'
import WeatherApp from '../WeatherApp/WeatherApp'
import LandingPage from '../LandingPage/LandingPage'

function NavigationLinks() {
        return (
            <nav>
            <h1>
                <Link to='/'>Navigation</Link>
            </h1>
            <ul>
              <li>
                <Link to="/WeatherApp">WeatherApp</Link>
              </li>
              <li>
                <Link to="/TodoApp">TodoApp</Link>
              </li>
              <li>
                <Link to="/RecipesApp">RecipesApp</Link>
              </li>
            </ul>
            </nav>
          )
}

export default NavigationLinks
