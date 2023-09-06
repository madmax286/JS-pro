import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { StyledModal } from './styled'

interface IPost {
    id: number,
    image: string,
    text: string,
    date: string,
    title: string,
}
  
const Modal = () => {
    // const [posts, setPosts] = useState([]);
    const posts = useSelector((state: any) => state.posts)
    const theme = useSelector(({theme}) => theme)
    const modalInfo = useSelector(({modalInfo}) => modalInfo)  
    const dispatch = useDispatch()

  return (
    <StyledModal theme={theme} onClick={() => dispatch({type: 'TOGGLE_MODAL'})}>
      {posts
        .filter(({ id }: { id: number }) => modalInfo.id === id)
        .map(({ id, image, text, date, title }: IPost) => (
          <div key={id}>
            <img src={image} alt={image} />
            <h3>{date}</h3>
            <h2>{title}</h2>
          </div>
        ))}
    </StyledModal>
  );
}

export default Modal
