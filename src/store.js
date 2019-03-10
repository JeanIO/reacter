import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const reducers = combineReducers({
})

const store = createStore(reducers)

export default store
