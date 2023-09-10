import React, {FC, ReactNode, useState, useContext} from 'react'
import Header from '../Header'
import './style.css'
import SignIn from '../SignInPage'
import Success from '../SuccessPage'
import PostsList from '../PostsList'
import OpenedPost from '../OpenedPost'
import { ThemeContext } from '../../App';
import { StyledPageTemplate } from './styled'
import SearchResults from '../SearchResults'
import Counter from '../Counter'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loader from '../Loader/Loader'

interface IPageTemplate {
    title?: string,
    children?: ReactNode
}

const PageTemplate: FC<IPageTemplate> = ({title, children}) => {
  // const {theme, toggleTheme} = useContext(ThemeContext)
  // const modalInfo = useSelector(({modalInfo}) => modalInfo)
  const theme = useSelector(({theme}) => theme)
  const isLoading = useSelector(({isLoading}) => isLoading)

  return (
    <>
      <Header />
      <StyledPageTemplate theme={theme}>
        <main>
        <Link to={'/blog'}>Back to home</Link>
        {isLoading ? <Loader/> : children}
        </main>
        <footer>
          <span>© 2023</span>
          <span>All rights reserved</span>
        </footer>
      </StyledPageTemplate>
    </>
  );
}

export default PageTemplate
