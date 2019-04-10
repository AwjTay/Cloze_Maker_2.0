export const handleUserInput = ({ input }) => {
  return {

    type: 'submitInput',
    input: input,
  }
}