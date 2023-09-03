import React, {useState, useEffect, useContext} from 'react'
import PostPage from './PostPage'
import { useNavigate, useParams } from 'react-router';
import { ThemeContext } from '../../App';
import { StyledOpenedPost } from './styled';
import { useSelector } from 'react-redux';

interface IPost {
  id: number,
  image: string,
  text: string,
  date: string,
  title: string,
}

const OpenedPost = () => {
  const {id} = useParams<{id: string }>()
    console.log(id);
  const {theme, toggleTheme} = useContext(ThemeContext)
  const posts = useSelector((state: any) => state.posts)

  // const navigate = useNavigate()
  return (
    <>
      { id && 
        <StyledOpenedPost theme={theme}>
          {posts.map(({ id, image, text, date, title }: IPost) => (
            <PostPage key={id} id={id} image={image} title={title} text={text} date={date} posts={posts}></PostPage>
          ))[+id - 1]}
      </StyledOpenedPost>}
    </>
  )
}

export default OpenedPost
