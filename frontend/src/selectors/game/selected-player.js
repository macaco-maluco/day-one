import {compose, equals} from 'ramda'
import {SOLAR_SYSTEM_STAGES} from 'constants'

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
      .filter(isSolarSystemAlive(state.solarSystems))
      .reduce(
        (total, planet) => total + planet.currentPopulation,
        state.players[state.currentPlayer].currentPopulation
      )
  }
}

const isSolarSystemAlive = (solarSystems) => (planet) => {
  return solarSystems
    .find((solarSystem) => equals(solarSystem.id, planet.solarSystemId))
    .stage === SOLAR_SYSTEM_STAGES.MAIN_SEQUENCE
}
