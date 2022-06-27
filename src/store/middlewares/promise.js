function promise({ dispatch, getState }) {
	return function(next) {
		// 此处 action 是 Promise
		return function(action) {
			if (action && typeof action.then === "function") {
				return action.then(newAction => dispatch(newAction))
			}
			return next(action)
		}
	}
}

export default promise