import React, {FC, useState} from 'react'
import { SyledPostFavorites } from '../../PostsList/Post/styled'
import { SyledPostLike } from '../../PostsList/Post/styled'
import { SyledPostFooter } from '../../PostsList/Post/styled'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import '../../PostsList/style.css'
import './style.css'

interface IPost {
    id: number,
    image: string,
    text: string,
    date: string,
    title: string,
    posts: {title: string}[],
    like?: number,
    isFavorite?: boolean
}

const PostPage: FC<IPost> = ({id, image, text, date, title, posts, like, isFavorite}) => {
    // const [like, setLike] = useState(0)
    // const [dislike, setDislike] = useState(0)
    // const [Favorite, setFavorite] = useState(false)
    const dispatch = useDispatch()
  
  return (
    <div className="wrapper-page">
      <div className="content">
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <div className="text-page">
          {text}
          <SyledPostFooter className="footer-page">
            <SyledPostLike className="like-dislike">
              <span onClick={() => dispatch({ type: "ADD_LIKE", payload: id })}>&#128077;</span>
              <span>{like || 0}</span>
              <span onClick={() => dispatch({ type: "REMOVE_LIKE", payload: id })}>&#128078;</span>
            </SyledPostLike>
            <SyledPostFavorites className="add-to-favorites">
              <span
                className={isFavorite ? "selected" : ""}
                onClick={() => {
                  // setFavorite((prevState) => !prevState)
                  dispatch({ type: "ADD_TO_FAVORITE", payload: id });
                }}
              >
                {isFavorite ? "💝" : "💙"}
                Add to Favorites
              </span>
            </SyledPostFavorites>
          </SyledPostFooter>
        </div>
      </div>

      <div className="pagination">
        {id > 1 ? (
          <Link className="prev-page" to={`/blog/${+id - 1}`}>
            <div>
              Prev
              <br />
              <span>{posts[+id - 2].title}</span>
            </div>
            <div>&#129144;</div>
          </Link>
        ) : (
          <div></div>
        )}
        {id < posts.length ? (
          <Link className="next-page" to={`/blog/${+id + 1}`}>
            <div>
              Next
              <br />
              <span>{posts[+id].title}</span>
            </div>
            <div>&#129146;</div>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default PostPage
