/**
 *  源码中的 dispatch 是不能派发函数的
 */
function thunk({dispatch, getState}) {
	return function(next) {
		return function(action) {
			if (typeof action === 'function') {
				return action(dispatch, getState)
			}
			return next(action)
		}
	}
}

export default thunk