import React, {useState, useEffect, createContext} from 'react'
import Post from './Post/Post';
import './style.css'
import { fetchPosts, url } from '../../helpers';
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';
import { useSelector } from 'react-redux';
import Title from '../Title/Title';
import Tabs from '../Tabs/Tabs';

interface IPost {
  id: number,
  image: string,
  text: string,
  date: string,
  title: string,
}

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect (() => {
    fetchPosts(url, setPosts)
  }, [])

  const modalInfo = useSelector(({modalInfo}) => modalInfo)

  // const navigate = useNavigate()
  // console.log(url);
  // let n = 0, m = 12
  // const handleClick = () => {
  //   n += 13
  //   m += 13
  // }

  return (
    <>
      <Title text="Blog"/>
      <Tabs text="tabs" />
      <div className="posts-container">
        {posts.map(({ id, image, text, date, title }: IPost) => (
          <Post key={id} id={id} image={image} title={title} text={text} date={date} posts={posts}/>
        ))
        // .slice(n, m-1)
        }
      </div>
      <div className="pagination">
        <div className="prev-page">&#129144; Prev</div>
        <div className="page-number">1 2 3 ... 5</div>
        <div 
          // onClick={() => {
            // handleClick()
            // console.log(n, m)
            // console.log(posts.slice(n, m));            
            
            // url.searchParams.append('page', '2')
            // console.log(url);          
          // }} 
          className="next-page">
          Next &#129146;
        </div>
      </div>
      {modalInfo.isOpen && <Modal/>}
    </>
  );
}

export default PostsList
