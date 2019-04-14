import React, { Component } from 'react';
import './App.css';
import BrowserNavigation from './components/BrowserNavigation/BrowserNavigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserNavigation />
      </div>
    );
  }
}

export default App;
