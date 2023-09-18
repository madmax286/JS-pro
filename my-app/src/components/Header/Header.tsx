import React, {useContext} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Menu from '../Menu';
import { StyledHeader } from './styled';
import './style.css'

const Header = () => {
  const theme = useSelector(({theme}) => theme)
  const navigate = useNavigate()

  return (
    <StyledHeader theme={theme}>
      <Menu />
      <button
        className="search-btn"
        type="button"
        onClick={() => navigate("/search")}
      >
        Search
      </button>
    </StyledHeader>
  );
}

export default Header
