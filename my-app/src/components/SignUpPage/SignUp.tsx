import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { CREATE_USER } from '../../actions/actions'
import Header from '../Header'
import Input from '../Input'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  
  const navigate = useNavigate()
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>()

  return (
    <>
    {/* <Header/> */}
    <h1>Sign Up</h1>
    <div className='content'>
      <form action="#">
        <Input type="text" label="Name" placeholder="Your name" value={name} onChange={setName} />
        <Input type="email" label="Email" placeholder="Your email" value={email} onChange={setEmail} />
        <Input type="password" label="Password" placeholder="Your password" value={password} onChange={setPassword} />
        <Input type="password" label="Confirm Password" placeholder="Confirm password" value={confirmPassword} onChange={setConfirmPassword} />

        <button type='button' className='btn-signin'
          onClick={() => {
            dispatch(CREATE_USER({email, password, username: name}))
            navigate('/success')
          }          
          }>
            Sign Up
        </button>

        <div className='signup'>
          <span>Already have an account?</span>
          <Link to={'/signIn'}>Sign In</Link>
        </div>
      </form>
    </div>
    </>
  );
}

export default SignUp
