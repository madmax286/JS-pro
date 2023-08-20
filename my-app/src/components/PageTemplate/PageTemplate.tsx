import React, {FC, ReactNode, useState} from 'react'
import Burger from '../Burger'
import './style.css'
import SignIn from '../SignInPage'
import Success from '../SuccessPage'

interface IPageTemplate {
    title?: string,
    children?: ReactNode
}

const PageTemplate: FC<IPageTemplate> = ({title, children}) => {

  return (
    <div className='pagetemplate'>
      <Burger />

      <main>
        <a href="#">Back to home</a>
        <SignIn />
        {/* <Success /> */}
      </main>

      <footer>
        <span>2023</span>
        <span>All rights reserved</span>
      </footer>
    </div>
  );
}

export default PageTemplate
