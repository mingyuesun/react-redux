/**
 * 绑定 actionCreators 和 store.dispatch 派发动作的方法
 * 返回的对应签名和原来的是一样的，只是会自动派发原来的动作
 * @param {*} actionCreators 
 * @param {*} dispatch
 */
function bindActionCreators(actionCreators, dispatch) {
	const boundActionCreators = {}
	for (const key in actionCreators) {
		const actionCreator = actionCreators[key]
		boundActionCreators[key] = bindActionCreator(actionCreator, dispatch)
	}
	return boundActionCreators
}
/**
 * 把 actionCreator 和 dispatch 方法进行绑定，返回一个新的 actionCreator
 * @param {*} actionCreator 老的 actionCreator
 * @param {*} dispatch 派发的方法
 */
function bindActionCreator(actionCreator, dispatch) {
	return function(...argus) {
		return dispatch(actionCreator.apply(this, argus))
	}
}

export default bindActionCreators