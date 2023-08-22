import React, {FC, ReactNode, useState, useContext} from 'react'
import Burger from '../Burger'
import './style.css'
import SignIn from '../SignInPage'
import Success from '../SuccessPage'
import PostsList from '../PostsList'
import OpenedPost from '../OpenedPost'
import { ThemeContext } from '../../App';
import { StyledPageTemplate } from './styled'

interface IPageTemplate {
    title?: string,
    children?: ReactNode
}

const PageTemplate: FC<IPageTemplate> = ({title, children}) => {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <StyledPageTemplate theme={theme}>
      {/* <Burger /> */}

      <main>
        <a href="#">Back to home</a>
        {/* <SignIn /> */}
        {/* <Success /> */}
      </main>
      {/* <OpenedPost/> */}
      <PostsList />

      <footer>
        <span>© 2023</span>
        <span>All rights reserved</span>
      </footer>
    </StyledPageTemplate>
  );
}

export default PageTemplate
