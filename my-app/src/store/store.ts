import { legacy_createStore as createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";

const initialState = {
    count: 0,
    posts: [],
    user: {
        username: "",
        email: "",
        id: null,
        isActivated: false,
      },
    theme: 'light',
    modalInfo: {isOpen: false, id: null},
    postFavorite: {isFavorite: false, id: null},
    isLoading: false,
}

const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'TOGGLE_THEME': {
            return {
                ...state,
                theme: action.payload
            }
        }
        case 'TOGGLE_MODAL': {
            return {
                ...state,
                modalInfo: {
                    isOpen: !state.modalInfo.isOpen, 
                    id: action.payload
                }
            }
        }
        case 'SET_POSTS': {
            return {
                ...state,
                posts: action.payload,
            }
        }
        case 'SET_USERS': {
            return {
                ...state,
                posts: action.payload,
            }
        }
        case 'SET_ACTIVATION': {
            return {
                ...state,
                user: {...state.user, isActivated: action.payload},
            }
        }
        case 'SET_LOADING': {
            return {
                ...state,
                isLoading: !state.isLoading,
            }
        }

        case 'ADD_FAVORITE': {
            return {
                ...state,
                postFavorite: {
                    isFavorite: !state.postFavorite.isFavorite,
                    id: action.payload
                }
            }
        }
        case 'ADD_LIKE': {
            return {
                ...state,
                posts: state.posts.map((post: {id: number, like?: number}) => {
                    if (post.id === action.payload) {
                        post.like ? post.like++ : post.like = 0
                    }
                    return post
                })
            }
        }
        case 'REMOVE_LIKE': {
            return {
                ...state,
                posts: state.posts.map((post: {id: number, like?: number}) => {
                    if (post.id === action.payload) {
                        post.like ? post.like-- : post.like = 0
                    }
                    return post
                })
            }
        }
        default:
            return state
    }
}
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store