import React, {useState, useEffect} from 'react'
import Post from './Post/Post';
import './style.css'
import { fetchPosts } from '../../helpers';

interface IPost {
  id: number,
  image: string,
  text: string,
  date: string,
  title: string,
}

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  // const URL = 'https://studapi.teachmeskills.by/blog/posts/?limit=10'
  const url = new URL('https://64e17765ab0037358818387e.mockapi.io/posts/posts?limit=12&page=1&completed=true')

  useEffect (() => {
    fetchPosts(url, setPosts)
  }, [])

  return (
    <>
      <div className="posts-container">
        {posts.map(({ id, image, text, date, title }: IPost) => (
          <Post key={id} id={id} image={image} title={title} text={text} date={date}/>
        ))}
      </div>
      <div className="pagination">
        <div className="prev-page">&#129144; Prev</div>
        <div className="page-number">1 2 3 ... 5</div>
        <div className="next-page">Next &#129146;</div>
      </div>
    </>
  );
}

export default PostsList
