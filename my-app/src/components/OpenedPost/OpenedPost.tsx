import React, {useState, useEffect} from 'react'
import PostPage from './PostPage'
import { fetchPosts } from '../../helpers';

interface IPost {
  id: number,
  image: string,
  text: string,
  date: string,
  title: string,
}

const OpenedPost = () => {
  const [posts, setPosts] = useState([]);

  const url = new URL('https://64e17765ab0037358818387e.mockapi.io/posts/posts?limit=12&page=1&completed=true')

  useEffect (() => {
    fetchPosts(url, setPosts)
  }, [])

  return (
    <div>
        {posts.map(({ id, image, text, date, title }: IPost) => (
          <PostPage key={id} id={id} image={image} title={title} text={text} date={date}></PostPage>
        ))[0]}

    </div>
  )
}

export default OpenedPost
