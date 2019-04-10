import React, { Component } from "react"

class InputScreen extends Component {

	constructor(props) {
		super(props)
		this.state = {
			userInput : "",
		}

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e){
		this.setState({ userInput : e.currentTarget.value })
	}

	render(){

		return (

			<React.Fragment>
				<form>
					<div>
						<label htmlFor="paste_area">Paste your text in here</label>
						<textarea id="paste_area" onChange={ this.handleChange }></textarea>
					</div>
				</form> 
			</React.Fragment>
		) 
	}
}

export default InputScreen