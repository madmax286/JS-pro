import React, {createContext, useState, Dispatch, SetStateAction} from 'react';
import Burger from './components/Burger';
import Title from './components/Title';
import Tabs from './components/Tabs';
import PostsList from './components/PostsList';
import PageTemplate from './components/PageTemplate';

interface IThemeContext {
  theme: 'light' | 'dark',
  toggleTheme: () => void
}

export const ThemeContext = createContext<IThemeContext>({theme: 'light', toggleTheme: () => {}})

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const toggleTheme = () => {   
      setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='wrapper'>
        <Burger />
        {/* <Title text='Blog' />
        <Tabs text='tabs'/>
        <PostsList /> */}
        <PageTemplate />
      </div>

    </ThemeContext.Provider>
  );
}

export default App;
