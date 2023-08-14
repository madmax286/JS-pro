import React from 'react'
import './style.css'

interface IPost {
    id?: number,
    image: string,
    text?: string,
    date?: string,
    lesson_num?: number,
    title: string,
    description?: string
    author?: number,
}

const Post = ({id, image, text, date, lesson_num, title, description, author}: IPost) => {
  return (
    <div className='post'>
        <div className='text-section'>
            <h4>{date}</h4>
            <h2>{title}</h2>
            <h5>{description}</h5>
        </div>
        <div className='image-section'>
            <img  src={image} alt={text} />
            <h5>{text}</h5>
        </div>
    </div>
  )
}

export default Post
