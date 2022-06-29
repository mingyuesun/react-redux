import { createStore, applyMiddleware } from "../redux"
import rootReducer from './reducers'
import { logger, thunk, promise, persist } from './middlewares'

const preloadState = JSON.parse(localStorage.getItem("counter"))
const store = applyMiddleware( promise, thunk, persist, logger)(createStore)(rootReducer, preloadState)

export default store
/**
 * 中间件的核心原理就是劫持原来老的 dispatch 方法
 * 在原来老的方法之前和之后做一些事情
 */
