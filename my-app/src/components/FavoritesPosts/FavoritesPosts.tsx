import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StyledFavoritesPosts } from './styled';

interface IPost {
    id: number,
    image: string,
    text: string,
    date: string,
    title: string,
}

const FavoritesPosts = () => {
    const posts = useSelector((state: any) => state.posts)
    const theme = useSelector(({theme}) => theme)
    const postFavorite = useSelector(({postFavorite}) => postFavorite)  
    
    const navigate = useNavigate()

  return (
    <StyledFavoritesPosts theme={theme}>
      {posts
        .filter(({ id }: { id: number }) => postFavorite.id === id)
        .map(({ id, image, text, date, title }: IPost) => (
          <div key={id}>
            <img src={image} alt={image} />
            <h3>{date}</h3>
            <h2>{title}</h2>
          </div>
        ))}
    </StyledFavoritesPosts>
  );
}

export default FavoritesPosts
