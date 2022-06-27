import { ADD1, MINUS1 } from "../action-types"
function add() {
	return { type: ADD1, namespace: "counter1" }
}
function minus() {
	return { type: MINUS1, namespace: "counter1" }
}
const actionCreators = {
	add,
	minus
}

export default actionCreators