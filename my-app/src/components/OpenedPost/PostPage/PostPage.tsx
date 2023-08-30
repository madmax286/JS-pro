import React, {useState} from 'react'
import './style.css'
import '../../PostsList/style.css'
import { SyledPostFavorites } from '../../PostsList/Post/styled'
import { SyledPostLike } from '../../PostsList/Post/styled'
import { SyledPostFooter } from '../../PostsList/Post/styled'
import { Link, useParams } from 'react-router-dom'

interface IPost {
    id: number,
    image: string,
    text: string,
    date: string,
    title: string,
    posts: {title: string}[],
}

const PostPage = ({id, image, text, date, title, posts}: IPost) => {
    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)
    const [Favorite, setFavorite] = useState(false)
  
  return (
    <div className="wrapper-page">
      <div className="content">
        <h1>{title}</h1>
        <img src={image} alt={title} />
        <div className="text-page">
            {text}
            <SyledPostFooter className='footer-page'>
                <SyledPostLike className='like-dislike'>
                    <span onClick={() => setLike(prevState => prevState + 1)}>&#128077;</span>
                    <span onClick={() => setDislike(prevState => prevState + 1)}>&#128078;</span>
                </SyledPostLike>
                <SyledPostFavorites className='add-to-favorites'>
                    <span className={Favorite ? 'selected' : ''} onClick={() => setFavorite((prevState) => !prevState)}>
                        {Favorite ? '💙' : '💝'} Add to Favorites
                    </span>
                </SyledPostFavorites>
            </SyledPostFooter>
        </div>
      </div>

      <div className="pagination">
        {id > 1 ?
            <Link className="prev-page" to={`/blog/${+id-1}`}>
              <div>
                Prev<br />
                <span>{posts[+id-2].title}</span>
              </div>
              <div>&#129144;</div>
            </Link>   
            : <div></div> 
        }
        {id < posts.length ?
                <Link className="next-page" to={`/blog/${+id+1}`}>            
                <div>
                  Next<br />
                  <span>{posts[+id].title}</span>
                </div>
                <div>&#129146;</div>            
            </Link>
            : <div></div>
        }
      </div>
    </div>
  );
}

export default PostPage
