import { createStore, applyMiddleWares } from './redux'
import reduxLogger from './redux-logger'
import { reducer } from './../entities/toDoList'
export default createStore(reducer, applyMiddleWares(reduxLogger, reduxLogger))