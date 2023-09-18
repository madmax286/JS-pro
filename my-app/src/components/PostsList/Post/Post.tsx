import React, {FC, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link, Route, Routes, useNavigate, useLocation, useParams, NavLink, Navigate} from 'react-router-dom'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { FETCH_SELECTED_POST } from '../../../actions/actions'
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
    like?: number,
    isFavorite?: boolean
}

const Post: FC<IPost> = ({id, image, text, date, title, posts, like, isFavorite}) => {
  const theme = useSelector(({theme}) => theme)
  const navigate = useNavigate()
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>()
  
  return (
    <StyledPost id={id} posts={posts} theme={theme}>
      <SyledPostDescription
        className="post-description"
        // onClick={() => navigate(`/blog/${id}`, {state: {id: `${id}`}})}
        onClick={() => dispatch({ type: "TOGGLE_MODAL", payload: id })}
      >
        <img src={image} alt={title} />
        <SyledTextSection>
          <h4>{date}</h4>
          <h3>{title}</h3>
          {/* <h5>{text}</h5> */}
        </SyledTextSection>
      </SyledPostDescription>

      <SyledPostFooter>
        <SyledPostLike>
          <span onClick={() => dispatch({ type: "ADD_LIKE", payload: id })}>
            &#128077;
          </span>
          <span>{like || 0}</span>
          <span onClick={() => dispatch({ type: "REMOVE_LIKE", payload: id })}>
            &#128078;
          </span>
          {/* <span>{dislike}</span> */}
        </SyledPostLike>
        <SyledPostFavorites>
          <span
            className={isFavorite ? "selected" : ""}
            onClick={() => {
              // setValue((prevState) => !prevState)
              dispatch({ type: "ADD_TO_FAVORITE", payload: id });
            }}
          >
            {isFavorite ? "💝" : "💙"}
          </span>

          <span
            // onClick={() => navigate(`/blog/${id}`, { state: { id: `${id}` } })}
            onClick={() => dispatch(FETCH_SELECTED_POST(navigate, id))}
          >
            &#8943;
          </span>
        </SyledPostFavorites>
      </SyledPostFooter>
    </StyledPost>
  );
}

export default Post
