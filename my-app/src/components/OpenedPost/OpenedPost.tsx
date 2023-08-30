import React, {useState, useEffect, useContext} from 'react'
import PostPage from './PostPage'
import { fetchPosts, url } from '../../helpers';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../Header';
import { ThemeContext } from '../../App';
import { StyledOpenedPost } from './styled';

interface IPost {
  id: number,
  image: string,
  text: string,
  date: string,
  title: string,
}

const OpenedPost = () => {
  const [posts, setPosts] = useState([]);
  const {id} = useParams<{id: string }>()
    console.log(id);
  const navigate = useNavigate()
  const {theme, toggleTheme} = useContext(ThemeContext)

  useEffect (() => {
    fetchPosts(url, setPosts)
  }, [])

  return (
    <>
    {/* <Link to={`/blog/${+id + 1}`}> */}
    {/* <Header/> */}
      { id && 
        <StyledOpenedPost theme={theme}>
          {posts.map(({ id, image, text, date, title }: IPost) => (
            <PostPage key={id} id={id} image={image} title={title} text={text} date={date} posts={posts}></PostPage>
          ))[+id - 1]}
      </StyledOpenedPost>}
    {/* </Link> */}
    </>
  )
}

export default OpenedPost
