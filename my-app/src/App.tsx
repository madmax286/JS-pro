import React from 'react';
import './App.css';
import Burger from './components/Burger';
import Title from './components/Title';
import Tabs from './components/Tabs';

const App = () => {
  
  return (
    <div className="App">
      <Burger />
      <Title text='Sign in' />
      <Tabs text='tabs'/>
    </div>
  );
}

export default App;
