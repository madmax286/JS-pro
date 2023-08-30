import { legacy_createStore as createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'

const initialState = {
    count: 0,
    theme: 'light',
    modalInfo: {isOpen: false, id: null},
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
                modalInfo: {isOpen: !state.modalInfo.isOpen, id: action.payload}
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