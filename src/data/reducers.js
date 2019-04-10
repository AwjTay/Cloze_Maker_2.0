import initial from "./initial"



const submitInput = (state, action) => {
	return (	

		{...state, unprocessed : action.input.split(" ")}		
	)
}

const identifyKeywords = state => {
	let keywords = state.unprocessed
	console.log(keywords)
}




/*state.unprocessed.map((val) => {
			if(val.length > 8){
				val = "...............''"
			} else{

				return val				
			}

			return 
		})

*/


const reducer = (state, action) => {
  switch (action.type) {
  	case "submitInput" : return identifyKeywords(submitInput(state, action));
	default:
	    return state
  }
}

export default reducer