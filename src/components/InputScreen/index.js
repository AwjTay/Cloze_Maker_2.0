import { connect } from 'react-redux'
import InputScreen from './InputScreen'
import { handleUserInput } from "../../data/stateActions"

const mapDispatchToProps = dispatch => {
	return{
		onSubmit: data => { 

			dispatch(handleUserInput(data))
			console.log(data)
		}

	}

} 

export default connect(null, mapDispatchToProps)(InputScreen)