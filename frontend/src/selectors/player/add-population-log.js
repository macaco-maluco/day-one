import {equals} from 'ramda'

export default (planet, {shipPopulation, planetPopulation}) => (state) => {
  const now = Date.now()

  return {
    ...state,
    players: state.players.map((player, index) =>
      index === state.currentPlayer
        ? {
          ...player,
          populationLog: [
            ...player.populationLog,
            [shipPopulation, now]
          ]
        }
        : player
    ),
    planets: [
      ...state.planets.filter(
        (filteredPlanet) => !(
          equals(filteredPlanet.solarSystemId, state.selectedSolarSystemId) &&
          planet.index === filteredPlanet.index
        )
      ),
      {
        ...planet,
        populationLog: [
          ...planet.populationLog,
          [planetPopulation, now]
        ]
      }
    ]
  }
}
