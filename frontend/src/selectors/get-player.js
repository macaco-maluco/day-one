export default (state) => ({
  ...state,
  ...(state.players[state.currentPlayer]),
  otherPlayers: state.players.slice(1)
})
