import React from 'react';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Hours } from './components/Hours';
import { Menu } from './components/Menu';
import { Location } from './components/Location';

import './App.css';

function App() {
  return (
   <div>
    <Navbar />
    <Header />
    <Menu />
    <Hours />
    <Location />
   </div>
  );
}

export default App;
