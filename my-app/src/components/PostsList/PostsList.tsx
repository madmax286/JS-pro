import React, {useState} from 'react'
import Post from './Post/Post';
import './style.css'

interface IPost {
  id: number,
  image: string,
  text?: string,
  date?: string,
  lesson_num: number,
  title: string,
  description?: string
  author: number,
}

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  const URL = 'https://studapi.teachmeskills.by/blog/posts/?limit=10'

  function fetchPosts() {
    return new Promise((resolve, reject) => {
      fetch(URL)
      .then(response => {
          if(response.ok){
              resolve(response.json())
          } else {
              reject(new Error('Some Error here �'))
          }
      })
    })
  }
  fetchPosts()
    .then((data: any) => {
      setPosts(data.results)
  })

  return (
    <div className='posts-container'>      
      {posts.map(({id, image, text, date, lesson_num, title, description, author}: IPost) => (
        <Post key={id} image={image} title={title} text={text} date={date} description={description}/>
      ))}
    </div>
  );
}

export default PostsList
