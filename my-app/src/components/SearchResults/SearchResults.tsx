import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';
import { StyledResult, StyledResultFooter, StyledResultText } from '../Search/styled';

interface IPost {
  id: number,
  image: string,
  text: string,
  date: string,
  title: string,
}

const SearchResults = ({id, image, text, date, title}: IPost) => {
  const [like, setLike] = useState(0)
  const [dislike, setDislike] = useState(0)
  const [value, setValue] = useState(false)
  const modalInfo = useSelector(({modalInfo}) => modalInfo)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  return (
    <StyledResult onClick={() => dispatch({type: 'TOGGLE_MODAL', payload: id})}>
      <img src={image} alt={title} />

      <StyledResultText>
        <h3>{date}</h3>
        <h3>{title}</h3>        
      </StyledResultText>

      <StyledResultFooter>
        <div>
          <span onClick={() => setLike(prevState => prevState + 1)}>&#128077;</span>
            <span>{like}</span>
          <span onClick={() => setDislike(prevState => prevState + 1)}>&#128078;</span>
            <span>{dislike}</span>
        </div>
        <div>
          <span className={value ? 'selected' : ''} onClick={() => setValue((prevState) => !prevState)}>{value ? '💝' : '💙'}</span>
          <span onClick={() => navigate(`/blog/${id}`, {state: {id: `${id}`}})}>&#8943;</span>
        </div>
      </StyledResultFooter>
      {modalInfo.isOpen && <Modal/>}

    </StyledResult>
  );
}

export default SearchResults
