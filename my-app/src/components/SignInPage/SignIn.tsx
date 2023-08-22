import React, {useState} from 'react'
import Input from '../Input'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
    <h1>Sign In</h1>
    <div className='content'>
      <form action="#">
        <Input type="email" label="Email" placeholder="Your email" value={email} onChange={setEmail} />
        <Input type="password" label="Password" placeholder="Your password" value={password} onChange={setPassword} />
        <a href="#">Forgot password?</a>
        <button type='button' className='btn-signin'>Sign In</button>
        <div className='signup'>
          <span>Don't have an account?</span>
          <a href="#">Sign Up</a>
        </div>
      </form>
    </div>
    </>
  );
}

export default SignIn
