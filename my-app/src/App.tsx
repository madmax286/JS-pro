import React, {createContext, useState, Dispatch, SetStateAction} from 'react';
import {Link, Route, Routes, useNavigate, useLocation, useParams, NavLink, Navigate} from 'react-router-dom'
import PostsList from './components/PostsList';
import PageTemplate from './components/PageTemplate';
import OpenedPost from './components/OpenedPost';
import SignIn from './components/SignInPage/SignIn';
import SuccessPage from './components/SuccessPage';
import Search from './components/Search/Search';
import SignUp from './components/SignUpPage/SignUp';
import ActivateUser from './components/ActivateUser';

interface IThemeContext {
  theme: 'light' | 'dark',
  toggleTheme: () => void
}

export const ThemeContext = createContext<IThemeContext>({theme: 'light', toggleTheme: () => {}})

const App = () => {
  // const [theme, setTheme] = useState<'light' | 'dark'>('light')
  // const toggleTheme = () => {   
  //     setTheme(theme === 'dark' ? 'light' : 'dark')
  // }
  // const navigate = useNavigate()
  const location = useLocation()

  return (
    <>
      {/* <ThemeContext.Provider value={{ theme, toggleTheme }}> */}
        <Routes>
          <Route path="/signIn" element={<PageTemplate children={<SignIn />}/>}/>
          <Route path="/success" element={<PageTemplate children={<SuccessPage />}/>}/>
          <Route path="/signUp" element={<PageTemplate children={<SignUp />}/>}/>
          <Route path="/blog" element={<PageTemplate children={<PostsList/>}/>}/>
          <Route path="/blog/:id" element={<PageTemplate children={<OpenedPost/>}/>}/>
          <Route path="/search" element={<PageTemplate children={<Search/>}/>} />
          <Route path="/activate/:uid/:token" element={<PageTemplate children={<ActivateUser/>}/>} />
        </Routes>
        {location.pathname === "/" && <Navigate to="blog" />}
      {/* </ThemeContext.Provider> */}
    </>
  );
}

export default App;
