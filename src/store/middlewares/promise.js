function promise({ dispatch, getState }) {
	return function(next) {
		// 此处 action 是 Promise
		return function(action) {
			if (action && typeof action.then === "function") {
				action.then(next)
				return action
			} else {
				next(action)
				return Promise.resolve(action)
			}
		}
	}
}

export default promise