import React from 'react'
import { cleanKeywords } from "../../data/arrayLogic"

const Result = ({ text, keywords, cloze}) => {
	let cleanedWords = cleanKeywords(keywords)
	return(
		<React.Fragment>
			<article>
				<div>		
					<p>{ cloze.join(" ") }</p>
				</div>
				<div>
					<p>{ cleanedWords.join(" - ") }</p>
				</div>
			</article>
		</React.Fragment>
	)
}
export default Result
