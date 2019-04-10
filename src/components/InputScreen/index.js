import { connect } from 'react-redux'
import InputScreen from './InputScreen'
import { handleUserInput } from "../../data/stateActions"

const mapDispatchToProps = dispatch => {
	return{
		onSubmit: input => dispatch(handleUserInput(input))
	}
} 

export default connect(null, mapDispatchToProps)(InputScreen)