import React, {useState, useEffect, createContext} from 'react';
import Post from './Post/Post';
import Title from '../Title/Title';
import Tabs from '../Tabs/Tabs';
import Modal from '../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FETCH_POSTS } from '../../actions/actions';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import './style.css';

interface IPost {
  id: number,
  image: string,
  text: string,
  date: string,
  title: string,
  like?: number,
  isFavorite?: boolean
}

const PostsList = () => {
  const posts = useSelector(({posts}) => posts)
  const modalInfo = useSelector(({modalInfo}) => modalInfo)
  const activeTab = useSelector(({activeTab}) => activeTab)

  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

  useEffect (() => {     
    if (!posts.length) {
      dispatch(FETCH_POSTS());      
    }
  }, [])

  // const asd = (url: URL) => url.searchParams.set('page', `${page++}`)
  return (
    <>
      <Title text="Blog" />
      <Tabs />
      <div className="posts-container">
        {!!posts.length && (
          <>
            {activeTab === "All" &&
              posts.map(
                ({ id, image, text, date, title, like, isFavorite }: IPost) => (
                  <Post
                    key={id}
                    id={id}
                    image={image}
                    title={title}
                    text={text}
                    date={date}
                    posts={posts}
                    like={like}
                    isFavorite={isFavorite}
                  />
                )
              )}
            {activeTab === "My favorites" &&
              posts.map(
                ({ id, image, text, date, title, like, isFavorite }: IPost) =>
                  isFavorite ? (
                    <Post
                      key={id}
                      id={id}
                      image={image}
                      title={title}
                      text={text}
                      date={date}
                      posts={posts}
                      like={like}
                      isFavorite={isFavorite}
                    />
                  ) : (
                    ""
                  )
              )}
            {activeTab === "Popular" &&
              posts.map(
                ({ id, image, text, date, title, like, isFavorite }: IPost) =>
                  like !== undefined && like > 5 ? (
                    <Post
                      key={id}
                      id={id}
                      image={image}
                      title={title}
                      text={text}
                      date={date}
                      posts={posts}
                      like={like}
                      isFavorite={isFavorite}
                    />
                  ) : (
                    ""
                  )
              )}
          </>
        )}
      </div>
      <div className="pagination">
        <div className="prev-page">&#129144; Prev</div>
        <div className="page-number">1 2 3 ... 5</div>
        <div
          onClick={() => {
            // url.searchParams.set('page', `${page++}`)
            // asd(url)
            // console.log(url);
          }}
          className="next-page"
        >
          Next &#129146;
        </div>
      </div>
      {modalInfo.isOpen && <Modal />}
    </>
  );
}

export default PostsList
