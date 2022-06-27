import { ADD1, MINUS1 } from "../action-types"
const initialState = { number: 0 }
function counter1(state = initialState, action){
	switch(action.type) {
		case ADD1:
			return {number: state.number + 1}
		case MINUS1:
			return {number: state.number - 1}
		default:
			return state
	}
}

export default counter1