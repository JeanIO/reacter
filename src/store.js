import { ToDo } from './entities'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const reducers = combineReducers({
    ToDo: ToDo.reducer
})

const store = createStore(reducers, applyMiddleware(thunk, logger))

export default store
