import { useContext, useLayoutEffect, useReducer } from "react"
import ReactReduxContext from "../ReactReduxContext"

function useSelector(selector) {
	const { store } = useContext(ReactReduxContext)
	const {subscribe, getState} = store
	const nextState = getState()
	const selectedState = selector(nextState)
	const [, forceUpdate] = useReducer(x => x + 1, 0)
	useLayoutEffect(() => {
		return subscribe(forceUpdate)
	}, [])
	return selectedState
}

export default useSelector