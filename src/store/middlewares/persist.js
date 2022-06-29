
function persist({ dispatch, getState }) {
	return function(next) {
		return function(action) {
			next(action)
			let nextState = getState()
			localStorage.setItem("counter", JSON.stringify(nextState))
			return action
		}
	}
}

export default persist