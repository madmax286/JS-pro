import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {Link, Route, Routes, useNavigate, useLocation, useParams, NavLink, Navigate} from 'react-router-dom'
import './style.css'
import { 
  SyledPostDescription,
  SyledTextSection,
  SyledPostFavorites,
  SyledPostLike,
  SyledPostFooter,
  StyledPost,
} from './styled'

interface IPost {
    id: number,
    image: string,
    text: string,
    date: string,
    title: string,
    posts: {id: number}[],
}

const Post = ({id, image, text, date, title, posts}: IPost) => {
  const [like, setLike] = useState(0)
  const [dislike, setDislike] = useState(0)
  const [value, setValue] = useState(false)
  const theme = useSelector(({theme}) => theme)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // const like = useSelector(({posts}) => posts)
  const index = posts.filter(({id}) => id)
  
  return (
    <StyledPost id={id} posts={posts} theme={theme}>
      <SyledPostDescription className='post-description'
        // onClick={() => navigate(`/blog/${id}`, {state: {id: `${id}`}})} 
        onClick={() => dispatch({type: 'TOGGLE_MODAL', payload: id})}>
        <img src={image} alt={title} />
        <SyledTextSection >
          <h4>{date}</h4>
          <h3>{title}</h3>
          {/* <h5>{text}</h5> */}
        </SyledTextSection>
      </SyledPostDescription>

      <SyledPostFooter>
        <SyledPostLike>
          <span onClick={() => setLike(prevState => prevState + 1)}>&#128077;</span>
            <span>{like}</span>
          <span onClick={() => setDislike(prevState => prevState + 1)}>&#128078;</span>
            <span>{dislike}</span>
        </SyledPostLike>
        <SyledPostFavorites>
          <span className={value ? 'selected' : ''} onClick={() => {
            setValue((prevState) => !prevState)
            dispatch({type: 'ADD_FAVORITE'})
          }}>{value ? '💝' : '💙'}</span>
          
          <span onClick={() => navigate(`/blog/${id}`, {state: {id: `${id}`}})}>&#8943;</span>
        </SyledPostFavorites>
      </SyledPostFooter>
    </StyledPost>
  );
}

export default Post
