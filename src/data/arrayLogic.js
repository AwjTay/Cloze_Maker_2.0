import removePunctuation from 'remove-punctuation';
import toCapitalCase from "to-capital-case"

export const identifyKeywords = (text) => { 
	let removed = text.filter(val => val.length > 8)
	return removed
}

export const createCloze = text => {
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

export const cleanKeywords = words => {
	let cleanedWords = words.map((word) => {
		let newWord = toCapitalCase(removePunctuation(word))
		return newWord

	})

	return cleanedWords

}	

