import { ADD1, MINUS1 } from "../action-types"
function add() {
	return { type: ADD1, namespace: "counter1" }
}
function minus() {
	return { type: MINUS1, namespace: "counter1" }
}
function thunkAdd() {
	return function(dispatch) {
		setTimeout(() => {
			dispatch({type: ADD1})
		}, 1000)
	}
}
function promiseAdd() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve({type: ADD1})
		}, 1000)
	}) 
}
const actionCreators = {
	add,
	minus,
	thunkAdd,
	promiseAdd
}

export default actionCreators