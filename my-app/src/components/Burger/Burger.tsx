import React from 'react'
import './style.css'

const Burger = () => {
    const handleBurgerClick = ((a: number, b: string) => console.log(a, b));

  return (
    <header className='header-burger'>
        <div className='burger' onClick={() => handleBurgerClick(123, 'click')}>
            <span></span>
        </div>
    </header>
  )
}

export default Burger
