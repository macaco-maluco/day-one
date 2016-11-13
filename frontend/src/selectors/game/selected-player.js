import {compose} from 'ramda'

const getPlayer = (state) => ({
  ...state,
  ...(state.players[state.currentPlayer]),
  otherPlayers: state.players.slice(1)
})

export default compose(
  getPlayer
)
