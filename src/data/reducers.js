import initial from "./initial"

const submitInput = (state, action) => {
	return (	

		{...state, unprocessed : action.input.split(" ")}		
	)
}

const identifyKeywords = text => { 
	let removed = text.filter(val => val.length > 8)
	return removed
}

const createCloze = text => {
	let cloze = text.map((val) => {
		if(val.length > 8){
			return val = ".............."
		} 
		else {
			return val
		}		
	})	
	return cloze
}

const storeKeywords = state => ({...state, removedWords : identifyKeywords(state.unprocessed)})

const storeCloze = state => ({...state, processed : createCloze(state.unprocessed)})







const reducer = (state, action) => {
  switch (action.type) {
  	case "submitInput" : return storeCloze(storeKeywords(submitInput(state, action)));
	default:
	    return state
  }
}

export default reducer