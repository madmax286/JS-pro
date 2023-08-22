import React, {useContext} from 'react'
import './style.css'
import { ThemeContext } from '../../App';


const Burger = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)

    const handleBurgerClick = ((a: number, b: string) => console.log(a, b));

  return (
    <header className='header-burger'>
        <div className='burger' onClick={() => handleBurgerClick(123, 'click')}>
            <span></span>
        </div>
        <button type='button' onClick={toggleTheme}>Toggle theme</button>
    </header>
  )
}

export default Burger
