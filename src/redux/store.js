import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import cartReducer from './reducers/cartReducer'
import userReducer from './reducers/userReducer'

const rootReducer = combineReducers({
    cartReducer,
    userReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))