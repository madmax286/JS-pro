import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../style.css'

const Tab = ({text, path}: {text: string, path: string}) => {
  const navigate = useNavigate()

  return (
    <div className='tabs__tab' onClick={() => navigate(`/blog/${path}`)}>
      {text}
    </div>
  )
}

export default Tab
