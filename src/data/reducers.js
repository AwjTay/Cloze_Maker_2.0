import initial from "./initial"
import { identifyKeywords, createCloze } from "./arrayLogic"

const reset = state => {
	return initial
}

const submitInput = (state, action) => {
	return (	
		{ ...state, unprocessed : action.input.split(" ")}		
	)
}

const storeKeywords = state => ({...state, removedWords : identifyKeywords(state.unprocessed)})

const storeCloze = state => ({...state, processed : createCloze(state.unprocessed)})


const reducer = (state, action) => {
  switch (action.type) {
  	case "submitInput" : return storeCloze(storeKeywords(submitInput(state, action)))
  	case "reset" : return reset()
	default:
	    return state
  }
}

export default reducer