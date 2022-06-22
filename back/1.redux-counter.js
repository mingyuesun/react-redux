import { createStore } from './redux'
let counterValue = document.getElementById("counter-value")
let addBtn = document.getElementById("add-btn")
let minusBtn = document.getElementById("minus-btn")

const ADD = 'ADD'
const MINUS = 'MINUS'
let initState = {number: 0}
/**
 * 处理器或者新状态的计算函数
 * @param {*} state 旧状态或者上一个状态
 * @param {*} action 动作，派发给 store 的动作
 */
const reducer = (state = initState, action) => {
  switch(action.type) {
    case ADD: 
      return {number: state.number + 1}
    case MINUS:
      return {number: state.number - 1}
    default:
      return state
  }
}
let store = createStore(reducer)
// 计算 把 store 中的状态取出来放到页面上
function render(){
  counterValue.innerHTML = store.getState().number
}
// 订阅 store 的状态变化事件，当仓库状态发生变化后重新执行 render 方法，获取最新的状态
store.subscribe(render)
render()

addBtn.addEventListener('click', function () {
  store.dispatch({ type: ADD })
})

minusBtn.addEventListener('click', function() {
  store.dispatch({ type: MINUS })
})






