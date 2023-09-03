import React, {useContext} from 'react'
import './style.css'
import { ThemeContext } from '../../App';
import Search from '../Search';
import Menu from '../Menu';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StyledHeader } from './styled';

const Header = () => {
  // const {theme, toggleTheme} = useContext(ThemeContext)
  const theme = useSelector(({theme}) => theme)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <StyledHeader theme={theme}>
        <Menu/>
        <button className='search-btn' type='button' onClick={() => navigate('/search')}>
          Search
        </button>
        {/* <button className='theme-btn' type='button' onClick={() => dispatch({type: 'TOGGLE_THEME', payload: 'light'})}>
          Toggle theme
        </button> */}
    </StyledHeader>
  )
}

export default Header
