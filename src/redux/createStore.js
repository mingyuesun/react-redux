function createStore(reducer, preloadedState) {
	let state = preloadedState
	let listeners = []
	function getState(){
		return state
	}
	function subscribe(listener) {
		listeners.push(listener)
		return () => {
			listeners.filter(l => l !== listener)
		}
	}
	function dispatch(action) {
		state = reducer(state, action)
		listeners.forEach(listener => listener())
		return action
	}
	dispatch({type: '@@REDUX/INIT'})
	return {
		getState,
		subscribe,
		dispatch
	}
}

export default createStore