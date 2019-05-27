import React, { Component } from "react"

class InputScreen extends Component {

	constructor(props) {
		super(props)
		this.state = {
			userInput : "",
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}

	handleChange(e){
		this.setState({ userInput : e.currentTarget.value })
	}


	handleClick(e){
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	render(){

		return (

			<React.Fragment>
				<form>
					<label ariaLabel="Paste your text in text area below" ariaRequired="true" htmlFor="paste_area">Paste your text in text area below</label>
					<textarea aria-label="text area" id="paste_area" onChange={ this.handleChange }></textarea>
					<div className="user_control">
						<button aria-label="click to create exercise" onClick={ this.handleClick }>Create</button>
						<button aria-label="click to reset" className="reset_button" onClick={ () => this.props.reset() }>Reset</button>
					</div>
				</form> 
			</React.Fragment>
		) 
	}
}

export default InputScreen


