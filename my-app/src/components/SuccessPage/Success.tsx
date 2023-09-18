import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { StyledForm } from './styled';

const Success = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Success</h1>
      <StyledForm action="#">
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
