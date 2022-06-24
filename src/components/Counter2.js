import React from "react"
import { useSelector, useBoundDispatch } from "../react-redux"
import actionCreators from "../store/actionCreators/counter2"

function Counter2() {
	const { number } = useSelector(state => state.counter2)
	const { add, minus } = useBoundDispatch(actionCreators)
	return (
		<div>
			<p>{number}</p>
			<button onClick={add}>+</button>
			<button onClick={minus}>-</button>
		</div>
	)
}

export default Counter2