
function applyMiddleware(middleware) {
	return function(createStore) {
		return function(reducer) {
			const store = createStore(reducer)
			let dispatch = middleware(store)(store.dispatch)
			return {
				...store,
				dispatch
			}
		}
	}
}

export default applyMiddleware