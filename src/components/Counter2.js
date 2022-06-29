import React from "react"
import { useSelector, useBoundDispatch, useDispatch } from "../react-redux"
import actionCreators from "../store/actionCreators/counter2"

function Counter2() {
	const { number } = useSelector(state => state.counter2)
	const { add, minus } = useBoundDispatch(actionCreators)
	const dispatch = useDispatch()
	const dispatchAdd2 = () => {
		const result = dispatch({type: 'ADD2'})
		result.then(r => console.log(r))
	}
	return (
		<div>
			<p>{number}</p>
			<button onClick={add}>+</button>
			<button onClick={minus}>-</button>
			<button onClick={dispatchAdd2}>派发ADD2</button>
		</div>
	)
}

export default Counter2