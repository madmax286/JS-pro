import { legacy_createStore as createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'

const initialState = {
    count: 0,
    posts: [],
    theme: 'light',
    modalInfo: {isOpen: false, id: null},
    postFavorite: {isFavorite: false, id: null},
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

        // case 'INCREMENT': {
        //     return {
        //         ...state,
        //         count: state.count + action.payload
        //     }
        // }
        // case 'DECREMENT': {
        //     return {
        //         ...state,
        //         count: state.count - 1
        //     }
        // }
        default:
            return state
    }
}

const store = createStore(rootReducer, composeWithDevTools())

export default store