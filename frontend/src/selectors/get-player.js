export default (state) => ({
  ...state,
  ...(state.players[state.currentPlayer])
})
