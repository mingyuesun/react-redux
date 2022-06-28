import React, { 
	useLayoutEffect, useReducer, 
	useMemo
} from "react"
import ReactReduxContext from "./ReactReduxContext"
import { bindActionCreators } from "../redux"

function connect(mapStateToProps, mapDispatchToProps) {
	return function(OldComponent) {
		return function(props) {
			const { store } = React.useContext(ReactReduxContext)
			const { getState, dispatch, subscribe } = store
			const prevState = getState()
			// 如果状态不改变，就不需要映射新的属性对象
			const stateProps = useMemo(() => mapStateToProps(prevState), [prevState])
			const dispatchProps = useMemo(() => {
				if (typeof mapDispatchToProps === "function") {
					return mapDispatchToProps(dispatch)
				} else {
					return bindActionCreators(mapDispatchToProps, dispatch)
				}
			}, [dispatch])
			// React@17
			const [, forceUpdate] = useReducer(x => x + 1, 0)
			useLayoutEffect(() => {
				return subscribe(forceUpdate)
				// eslint-disable-next-line
			}, [])
			return <OldComponent  {...stateProps} {...dispatchProps} {...props} />
		}
	}
}

export default connect