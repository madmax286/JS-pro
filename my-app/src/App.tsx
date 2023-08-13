import React from 'react';
import './App.css';
import Burger from './components/Burger';
import Title from './components/Title';
import Tabs from './components/Tabs';
import PostsList from './components/PostsList';

const App = () => {
  
  return (
    <div className="App">
      <Burger />
      <Title text='Sign in' />
      <Tabs text='tabs'/>
      <PostsList />
    </div>
  );
}

export default App;
