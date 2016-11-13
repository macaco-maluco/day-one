import {compose} from 'ramda'

export default (state) => {
  return compose(
    getPlayer,
    getTotalPopulation
  )(state)
}

const getPlayer = (state) => ({
  ...state,
  ...(state.players[state.currentPlayer]),
  otherPlayers: state.players.slice(1)
})

const getTotalPopulation = (state) => {
  return {
    ...state,
    totalPopulation: state.planets
      .filter((planet) => planet.playerId === state.currentPlayer)
      .reduce(
        (total, planet) => total + planet.currentPopulation,
        state.players[state.currentPlayer].currentPopulation
      )
  }
}
