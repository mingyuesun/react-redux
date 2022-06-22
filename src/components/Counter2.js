import React from "react"
import { bindActionCreators } from "../redux"
import store from "../store"
import actionCreators from "../store/actionCreators/counter2"

const boundActionCreators = bindActionCreators(actionCreators, store.dispatch)
class Counter2 extends React.Component{
	state = {number: store.getState().counter2.number}
	componentDidMount() {
		this.unsubscribe = store.subscribe(() => this.setState({number: store.getState().counter2.number}))
	}
	componentWillUnmount() {
		this.unsubscribe()
	}
	render(){
		return (
			<div>
				<p>{this.state.number}</p>
				<button onClick={boundActionCreators.add}>+</button>
				<button onClick={boundActionCreators.minus}>-</button>
			</div>
		)
	}
}

export default Counter2