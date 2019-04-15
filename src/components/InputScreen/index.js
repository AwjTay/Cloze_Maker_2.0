import { connect } from 'react-redux'
import InputScreen from './InputScreen'
import { handleUserInput, handleReset } from "../../data/stateActions"

const mapDispatchToProps = dispatch => {
	return{
		onSubmit: data => dispatch(handleUserInput(data)),
		reset: () => dispatch(handleReset()),
	}
} 

export default connect(null, mapDispatchToProps)(InputScreen)