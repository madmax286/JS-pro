import React, {useContext} from 'react'
import { ThemeContext } from '../../App';
import { StyledForm } from './styled';

const Success = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)
  // console.log(data);  

  return (
    <div>
      <h1>Success</h1>
      <StyledForm action="#" theme={theme}>
        <br />
        <span>Email confirmed.</span>
        <br />
        <span>Your registration is now completed.</span>
        <button className="btn-signin">Go to home</button>
      </StyledForm>
    </div>
  );
}

export default Success
