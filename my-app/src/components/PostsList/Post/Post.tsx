import React, {useState} from 'react'
import './style.css'

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
  const [value, setValue] = useState('⍓')
  
  return (
    <div className={`post post-${id}`}>
      <div className='post-description'>
        <img src={image} alt={title} />

        <div className="text-section">
          <h4>{date}</h4>
          <h3>{title}</h3>
          {/* <h5>{text}</h5> */}
        </div>
      </div>
      <div className="post-footer">
        <div className="post__like">
          <span onClick={() => setLike(prevState => prevState + 1)}>&#128077;</span>
            <span>{like}</span>
          <span onClick={() => setDislike(prevState => prevState + 1)}>&#128078;</span>
            <span>{dislike}</span>
        </div>
        <div className="post__favorites">
          <span onClick={() => setValue(prevState => !prevState ? '⍓' : '⍌')}>{value}</span>
          <span>&#8943;</span>
        </div>
      </div>
    </div>
  );
}

export default Post
