import React, {useState} from 'react'
import './style.css'
import '../../PostsList/style.css'
import { PostFavorites } from '../../PostsList/Post/styled'
import { PostLike } from '../../PostsList/Post/styled'
import { PostFooter } from '../../PostsList/Post/styled'

interface IPost {
    id: number,
    image: string,
    text: string,
    date: string,
    title: string,
}

const PostPage = ({id, image, text, date, title}: IPost) => {
    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)
    const [value, setValue] = useState(false)
  
  return (
    <div className="wrapper-page">
      <div className="content">
        <a href="#">Back to home</a>
        <h1>{title}</h1>
        <img src={image} alt={title} />
        <div className="text-page">
            {text}
            <PostFooter className='footer-page'>
                <PostLike className='like-dislike'>
                    <span onClick={() => setLike(prevState => prevState + 1)}>&#128077;</span>
                    <span onClick={() => setDislike(prevState => prevState + 1)}>&#128078;</span>
                </PostLike>
                <PostFavorites className='add-to-favorites'>
                    <span className={value ? 'selected' : ''} onClick={() => setValue((prevState) => !prevState)}>
                        {value ? '💙' : '💝'} Add to Favorites
                    </span>
                </PostFavorites>
            </PostFooter>
        </div>
      </div>

      <div className="pagination">
        <div className="prev-page">
            <div>Prev<br /><span>{title}</span></div>
            <div>&#129144;</div>
        </div>
        <div className="next-page">            
            <div>Next<br /><span>{title}</span></div>
            <div>&#129146;</div>            
        </div>
      </div>
    </div>
  );
}

export default PostPage
