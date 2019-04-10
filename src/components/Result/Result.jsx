import React from 'react'

// interpolates team experience value as width of 'temperature' div

const Result = ({ text }) => {
	console.log(text)
	return(
		<React.Fragment>
			<div>{ text }</div>
		</React.Fragment>
	)
}
export default Result
