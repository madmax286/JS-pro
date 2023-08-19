import React from 'react'
import Input from '../Input'

const SignIn = () => {
  return (
    <div>
      <form>
        <Input type="email" label="Email" placeholder="Your email" />
        <Input type="password" label="Password" placeholder="Your password" />
        <a href="#">Forgot password?</a>
        <button>Sign In</button>
        <br />
        <span>Don't have an account?</span>
      </form>
    </div>
  );
}

export default SignIn
