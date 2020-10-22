import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import ArticlesContainer from './components/ArticlesContainer';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <Header />
      <Route path="/articles" component={ArticlesContainer} />
    </div>
  );
}

export default App;
