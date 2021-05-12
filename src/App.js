import React from 'react';
import './App.css';
import Body from './components/layout/Body';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
}

export default App;
