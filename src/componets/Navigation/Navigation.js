import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage'
import RecipesApp from '../RecipesApp/RecipesApp'
import TodoApp from '../TodoApp/TodoApp'
import WeatherApp from '../WeatherApp/WeatherApp'
import NavigationLinks from './NavigationLinks'
import Error from '../Error'

const Navigation =() =>{
        return (
            <BrowserRouter>
                <NavigationLinks />
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/WeatherApp" component={WeatherApp} />
                    <Route path="/TodoApp" component={TodoApp} />
                    <Route path="/RecipesApp" component={RecipesApp} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
            );
    }
    



export default Navigation