import { createStore, applyMiddleware } from "../redux"
import rootReducer from './reducers'
import { logger, thunk, promise } from './middlewares'

// const store = applyMiddleware(logger)(createStore)(rootReducer)
// const store = applyMiddleware(thunk)(createStore)(rootReducer)
const store = applyMiddleware(promise, thunk, logger)(createStore)(rootReducer)

export default store
/**
 * 中间件的核心原理就是劫持原来老的 dispatch 方法
 * 在原来老的方法之前和之后做一些事情
 */


/* 	
const store = createStore(rootReducer)ß
let dispatch = store.dispatch
 // store.dispatch = function(action) {
 // 	console.log('prev', store.getState())
 // 	dispatch(action)
 // 	console.log('next', store.getState())
 // }
 store.dispatch = function(action) {
	 setTimeout(() => {
		 dispatch(action)
	 }, 1000)
 } */
 