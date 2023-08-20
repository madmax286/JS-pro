import React from 'react';
import Burger from './components/Burger';
import Title from './components/Title';
import Tabs from './components/Tabs';
import PostsList from './components/PostsList';
import PageTemplate from './components/PageTemplate';

const App = () => {
  
  return (
    <div className='wrapper'>
      <Burger />
      <Title text='Blog' />
      <Tabs text='tabs'/>
      <PostsList />
      {/* <PageTemplate /> */}
    </div>
  );
}

export default App;
