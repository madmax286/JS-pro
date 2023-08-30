import React, {useContext} from 'react'
import './style.css'
import { ThemeContext } from '../../App';
import Search from '../Search';
import Menu from '../Menu';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  // const {theme, toggleTheme} = useContext(ThemeContext)
  // const handleBurgerClick = ((a: number, b: string) => console.log(a, b));
  const theme = useSelector(({theme}) => theme)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <header className='header-menu'>
        {/* <div className='burger' onClick={() => handleBurgerClick(123, 'click')}>
            <span></span>
        </div> */}
        <Menu/>
        <button className='search-btn' type='button' onClick={() => navigate('/search')}>
          Search
        </button>
        <button className='theme-btn' type='button' onClick={() => dispatch({type: 'TOGGLE_THEME', payload: 'light'})}>
          Toggle theme
        </button>
    </header>
  )
}

export default Header
