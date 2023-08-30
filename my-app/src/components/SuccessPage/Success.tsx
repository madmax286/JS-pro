import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../App';
import Header from '../Header/Header';
import { StyledForm } from './styled';

const Success = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)
  // console.log(data);  
  const navigate = useNavigate()

  return (
    <div>
      <Header />
      <h1>Success</h1>
      <StyledForm action="#" theme={theme}>
        <br />
        <span>Email confirmed.</span>
        <br />
        <span>Your registration is now completed.</span>
        <button
          className="btn-signin"
          onClick={() => navigate('/blog')}>
          Go to home
        </button>
      </StyledForm>
    </div>
  );
}

export default Success
