import React from "react"
import { connect } from "../react-redux"
import actionCreators from "../store/actionCreators/counter1"
// import { ADD1, MINUS1 } from "../store/action-types"
class Counter1 extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={this.props.add}>+</button>
        <button onClick={this.props.minus}>-</button>
      </div>
    )
  }
}
/**
 * connect 是用来连接组件和仓库的
 * 输入：把仓库的状态输入到组件中
 * 输出：把 dispatch 方法输出到组件中
 */
const mapStateToPorps = (state) => state.counter1
const mapDispatchToProps = actionCreators
// const mapDispatchToProps = (dispatch) => ({
//   add() {
//     dispatch({ type: ADD1 })
//   },
//   minus() {
//     dispatch({ type: MINUS1 })
//   }
// })
export default connect(mapStateToPorps, mapDispatchToProps)(Counter1)
