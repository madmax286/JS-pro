import { legacy_createStore as createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";

const initialState = {
    count: 0,
    posts: [],
    post: [],
    user: {
        username: "",
        email: "",
        id: null,
        isActivated: false,
      },
    theme: 'light',
    modalInfo: {isOpen: false, id: null},
    isLoading: false,
    activeTab: 'All',
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
        case "SET_SELECTED_POST": {
            return {
                ...state,
                post: action.payload,
            };
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
                user: {...state.user, isActivated: true},
            }
        }
        case 'SET_LOADING': {
            return {
                ...state,
                isLoading: !state.isLoading,
            }
        }
        case "SET_ACTIVE_TAB" : {
            return {
              ...state,
              activeTab: action.payload,
            }
        }
        case "ADD_TO_FAVORITE" : {
            return {
              ...state,
              posts: state.posts.map((post: {id: number, isFavorite?: boolean}) => {
                if (post.id === action.payload) {
                    post = {
                        ...post, 
                        isFavorite: post.isFavorite !== undefined && post.isFavorite ? post.isFavorite = false : true
                    };
                 return post;
                }
                return post;
              })
            }
          }
        case 'ADD_LIKE': {
            return {
                ...state,
                posts: state.posts.map((post: {id: number, like?: number}) => {
                    if (post.id === action.payload) {
                        post = {
                            ...post, 
                            like: post.like !== undefined ? post.like + 1 : 1
                        }
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
                        post = {
                            ...post, 
                            like: post.like !== undefined && post.like > 0 ? post.like - 1 : 0
                        }
                        return post
                    }
                    return post
                })
            }
        }
        default:
            return state
    }
}
const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk)))

export default store