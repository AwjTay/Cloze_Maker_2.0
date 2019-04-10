import React from 'react'

// interpolates team experience value as width of 'temperature' div

const Result = ({ text, keywords, cloze }) => {
	console.log(text)
	return(
		<React.Fragment>
			<article>
				<div>		
					<p>{ cloze.join(" ") }</p>
				</div>
				<div>
					<p>{ keywords.join(" - ") }</p>
				</div>
			</article>
		</React.Fragment>
	)
}
export default Result
