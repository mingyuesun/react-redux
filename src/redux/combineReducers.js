function combineReducers(reducers) {
	// 返回一个根 reducer，也就是 redux 应用的唯一的一个 reducer
	return function(state={}, action){
		let nextState = {}
		for (let key in reducers) {
			// 此 key 对应的老状态
			let nextStateForKey = state[key]
			// 此 key 对应的 reducer 函数
			let reducerForKey = reducers[key]
			// 把这个 key 的老状态和动作传给这个 key 对应的 reducer 函数，计算出新状态，赋值给 nextState 中的对应 key
			nextState[key] = reducerForKey(nextStateForKey, action)
		}
		return nextState
	}
}

export default combineReducers

/**
 * let reducers = {
 * 		counter1: counter1Reducer,
 * 		counter2: counter2Reducer
 * }
 * let nextState = {
 * 		counter1: {number: 0},
 * 		counter2: {number: 0}
 * }
 */