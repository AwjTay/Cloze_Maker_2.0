export const handleUserInput = ({ userInput }) => {
	
  return {

    type: 'submitInput',
    input : userInput,
  }
}