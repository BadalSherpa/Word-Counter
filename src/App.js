import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import About from './components/common/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MainLayout} />
        <Route exact path='/about' component={About} />
      </Switch>
    </Router>
  );
}

export default App;
