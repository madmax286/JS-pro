import React from 'react'
import '../style.css'

const Tab = ({text}: {text: string}) => {
  return (
    <div className='tabs__tab'>
      {text}
    </div>
  )
}

export default Tab
