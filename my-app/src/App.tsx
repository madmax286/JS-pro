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

const App = () => {
  const location = useLocation()
  const token = localStorage.getItem('access')

  return (
    <>
      <Routes>
        {token && (
          <>
            <Route
              path="/activate/:uid/:token"
              element={<PageTemplate children={<ActivateUser />} />}
            />
            <Route
              path="/success"
              element={<PageTemplate children={<SuccessPage />} />}
            />
            <Route
              path="/search"
              element={<PageTemplate children={<Search />} />}
            />
            <Route
              path="/blog"
              element={<PageTemplate children={<PostsList />} />}
            />
            <Route
              path="/blog/:id"
              element={<PageTemplate children={<OpenedPost />} />}
            />
          </>
        )}
        <Route
          path="/signIn"
          element={<PageTemplate children={<SignIn />} />}
        />
        <Route
          path="/signUp"
          element={<PageTemplate children={<SignUp />} />}
        />
      </Routes>
      {location.pathname === "/" && <Navigate to="blog" />}
    </>
  );
}

export default App;
