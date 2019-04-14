import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from "../Navigation/Navigation";
import HomePage from "../HomePage/HomePage";
import TodoApp from "../TodoApp/TodoApp";
import RecipesApp from "../RecipesApp/RecipesApp";
import WeatherApp from "../WeatherApp/WeatherApp";

function BrowserNavigation () {
    return (
      <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/" component={HomePage}  exact/>
            <Route path="/TodoApp" component={TodoApp} />
            <Route path="/RecipesApp" component={RecipesApp} />
            <Route path="/WeatherApp" component={WeatherApp}/>
          </Switch>
      </BrowserRouter>
    )
  }

export default BrowserNavigation
