
function wrapPromise({getState, dispatch}) {
	return function(next) {
		return function(action) {
			if (action.then && typeof action.then === "function") {
				next(action)
				return action
			}
				let promise = Promise.resolve(action)
			  next(promise)
				return promise
		}
	}
}

export default wrapPromise