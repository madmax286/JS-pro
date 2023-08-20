import React, {useState, useEffect} from 'react'
import Post from './Post/Post';
import './style.css'

interface IPost {
  id: number,
  image: string,
  text: string,
  date: string,
  title: string,
  // description?: string
  // author: number,
  // lesson_num: number,
}

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('⍓')

  // const URL = 'https://studapi.teachmeskills.by/blog/posts/?limit=10'
  const url = new URL('https://64e17765ab0037358818387e.mockapi.io/posts/posts')
    url.searchParams.append("completed", 'false');
    url.searchParams.append("page", '1');
    url.searchParams.append("limit", '12');

  const fetchPosts = () => {
    fetch(url, {
      method: 'GET',
      headers: {'content-type':'application/json'},
    })
      .then(response => {
          if (response.ok) {
              return response.json()
          } 
      })
      .then((data: any) => {
        setPosts(data)
      })
      .catch(err => {
        console.error(err.message);        
      })
  }

  useEffect (() => {
    fetchPosts()
  }, [])

  return (
    <div className='posts-container'>      
      {posts.map(({id, image, text, date, title}: IPost) => (
        <Post key={id} id={id} image={image} title={title} text={text} date={date}/>
      ))}
    </div>
  );
}

export default PostsList
