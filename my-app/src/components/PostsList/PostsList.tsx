import React, {useState, useEffect, createContext} from 'react';
import Post from './Post/Post';
import Title from '../Title/Title';
import Tabs from '../Tabs/Tabs';
import Modal from '../Modal/Modal';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FETCH_POSTS } from '../../actions/actions';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

interface IPost {
  id: number,
  image: string,
  text: string,
  date: string,
  title: string,
}

// let page = 1
// let url = new URL(`https://64e17765ab0037358818387e.mockapi.io/posts/posts?limit=12&page=1`)
// url.searchParams.append('page', `${page}`)

// const fetchPosts = (url: URL) => fetch(url, {
//     method: 'GET',
//     headers: {'content-type':'application/json'},
//   })

const PostsList = () => {
  const posts = useSelector((state: any) => state.posts)
  const modalInfo = useSelector(({modalInfo}) => modalInfo)
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  useEffect (() => {     

    if (!posts.length) {
      dispatch(FETCH_POSTS());      
    }
    // console.log(1);
  }, [])

  // const asd = (url: URL) => url.searchParams.set('page', `${page++}`)
  return (
    <>
      <Title text="Blog"/>
      <Tabs text="tabs" />
      <div className="posts-container">
        {!!posts.length && 
        posts.map(({ id, image, text, date, title }: IPost) => (
          <Post key={id} id={id} image={image} title={title} text={text} date={date} posts={posts}/>
        ))}
      </div>
      <div className="pagination">
        <div className="prev-page">&#129144; Prev</div>
        <div className="page-number">1 2 3 ... 5</div>
        <div onClick={() => {
            // url.searchParams.set('page', `${page++}`)
            // asd(url)
            // console.log(url);
          }} 
          className="next-page">
          Next &#129146;
        </div>
      </div>
      {modalInfo.isOpen && <Modal/>}
    </>
  );
}

export default PostsList
