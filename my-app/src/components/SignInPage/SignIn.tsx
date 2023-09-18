import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { SIGN_IN } from '../../actions/actions'
import Input from '../Input'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate()
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>()

  return (
    <>
    <h1>Sign In</h1>
    <div className='content'>
      <form action="#">
        <Input type="email" label="Email" placeholder="Your email" value={email} onChange={setEmail} />
        <Input type="password" label="Password" placeholder="Your password" value={password} onChange={setPassword} />
        <a href="#">Forgot password?</a>
        <button type='button' className='btn-signin'
          onClick={() => dispatch(SIGN_IN(navigate, email, password))}>
          Sign In
        </button>
        <div className='signup'>
          <span>Don't have an account?</span>
          <Link to={'/signUp'}>Sign Up</Link>
        </div>
      </form>
    </div>
    </>
  );
}

export default SignIn
