import React, {useState} from 'react'
import './style.css'
import { PostDescription } from './styled'
import { TextSection } from './styled'
import { PostFavorites } from './styled'
import { PostLike } from './styled'
import { PostFooter } from './styled'
import { StyledPost } from './styled'

interface IPost {
    id: number,
    image: string,
    text: string,
    date: string,
    title: string,
}

const Post = ({id, image, text, date, title}: IPost) => {
  const [like, setLike] = useState(0)
  const [dislike, setDislike] = useState(0)
  const [value, setValue] = useState(false)
  
  return (
    <StyledPost id={id} className={`post-${id}`} >
      <PostDescription className='post-description'>
        <img src={image} alt={title} />

        <TextSection >
          <h4>{date}</h4>
          <h3>{title}</h3>
          {/* <h5>{text}</h5> */}
        </TextSection>
      </PostDescription>

      <PostFooter>
        <PostLike>
          <span onClick={() => setLike(prevState => prevState + 1)}>&#128077;</span>
            <span>{like}</span>
          <span onClick={() => setDislike(prevState => prevState + 1)}>&#128078;</span>
            <span>{dislike}</span>
        </PostLike>
        <PostFavorites>
          <span className={value ? 'selected' : ''} onClick={() => setValue((prevState) => !prevState)}>{value ? '💙' : '💝'}</span>
          <span>&#8943;</span>
        </PostFavorites>
      </PostFooter>
    </StyledPost>
  );
}

export default Post
