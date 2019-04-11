export const handleUserInput = ({ userInput, characterAmount }) => {
	
  return {

    type: 'submitInput',
    input : userInput,
    characters : characterAmount,
  }
}

export const handleReset = () => {
  return {
    type: 'reset'
  }
}