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
		console.log(this.state)
	}

	render(){

		return (

			<React.Fragment>
				<form>
					<label htmlFor="paste_area">Paste your text in here</label>
					<textarea id="paste_area" onChange={ this.handleChange }></textarea>
					<button onClick={ this.handleClick }>Submit</button>
				</form> 
			</React.Fragment>
		) 
	}
}

export default InputScreen