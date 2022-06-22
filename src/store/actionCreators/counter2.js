import { ADD2, MINUS2 } from "../action-types"
function add() {
	return { type: ADD2 }
}
function minus() {
	return { type: MINUS2 }
}
const actionCreators = {
	add,
	minus
}

export default actionCreators