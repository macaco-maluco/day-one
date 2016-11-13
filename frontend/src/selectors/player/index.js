import playerEnergy from 'calculators/player-energy'
import playerPopulation from 'calculators/player-population'

export default (state) => {
  return {
    ...state,
    players: state.players.map((player) => ({
      ...player,

      currentPopulation: playerPopulation(player.populationLog),

      currentEnergy: playerEnergy(player.energyLog)
    }))
  }
}
