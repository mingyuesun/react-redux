import compose from './compose'

function applyMiddleware(...middlewares) {
	return function(createStore) {
		return function(reducer) {
			const store = createStore(reducer)
			let dispatch
			const middlewareAPI = {
				getState: store.getState,
				dispatch: action => dispatch(action)
			}
			let chain = middlewares.map(middleware => middleware(middlewareAPI))
			dispatch = compose(...chain)(store.dispatch)
			return {
				...store,
				dispatch
			}
		}
	}
}

export default applyMiddleware