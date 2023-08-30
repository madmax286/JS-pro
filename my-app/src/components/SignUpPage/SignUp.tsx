import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Header'
import Input from '../Input'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate()

  return (
    <>
    <Header/>
    <h1>Sign Up</h1>
    <div className='content'>
      <form action="#">
        <Input type="text" label="Name" placeholder="Your name" value={name} onChange={setName} />
        <Input type="email" label="Email" placeholder="Your email" value={email} onChange={setEmail} />
        <Input type="password" label="Password" placeholder="Your password" value={password} onChange={setPassword} />
        <Input type="password" label="Confirm Password" placeholder="Confirm password" value={password} onChange={setPassword} />
        <button type='button' className='btn-signin'
          onClick={() => navigate('/success')}>
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
