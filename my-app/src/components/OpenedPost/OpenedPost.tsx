import React, {useState, useEffect, useContext} from 'react'
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import PostPage from './PostPage'
import { StyledOpenedPost } from './styled';

interface IPost {
  id: number,
  image: string,
  text: string,
  date: string,
  title: string,
  like?: number,
  isFavorite?: boolean
}

const OpenedPost = () => {
  const {id} = useParams<{id: string }>()
  const posts = useSelector(({posts}) => posts)
  
  return (
    <>
      {id && (
        <StyledOpenedPost>
          {
            posts.map(({ id, image, text, date, title, like, isFavorite }: IPost) => (
              <PostPage
                key={id}
                id={id}
                image={image}
                title={title}
                text={text}
                date={date}
                posts={posts}
                like={like}
                isFavorite={isFavorite}
              ></PostPage>
            ))[+id - 1]
          }
        </StyledOpenedPost>
      )}
    </>
  );
}

export default OpenedPost
