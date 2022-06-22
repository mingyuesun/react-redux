import { useContext } from "react"
import ReactReduxContext from "../ReactReduxContext"
import { bindActionCreators } from "../../redux"

function useBoundDispatch(actionCreators) {
	const { store } = useContext(ReactReduxContext)
	return bindActionCreators(actionCreators, store.dispatch)
}

export default useBoundDispatch