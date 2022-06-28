/**
 *  真正的 redux 中间件是有固定格式的
 *  getState 获取 store 中的状态
 *  dispatch 是原来 store 中的派发动作
 */
function logger({dispatch, getState}) {
	// 现在只考虑 store 中只有一个中间件的情况，那么这个 next 指的是 store 原生的或者原始的 dispatch 方法
	return function(next) { // 为了可以同时使用多个中间件，采用级联的形式
		return function(action) { // 改造后的新的 dispatch 方法
			next(action)
			return action
		}
	}
}

export default logger