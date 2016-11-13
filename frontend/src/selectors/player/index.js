import currentValue from 'calculators/current-value'
import playerPopulation from 'calculators/player-population'
import {ENERGY_CONSUMPTION_FACTOR} from 'constants'

export default (state) => {
  return {
    ...state,
    players: state.players.map((player) => ({
      ...player,

      currentPopulation: playerPopulation(player.populationLog),

      currentEnergy: currentValue(
        (previousValue, eventLoops) => previousValue === 0
          ? 0
          : previousValue - (eventLoops * ENERGY_CONSUMPTION_FACTOR),
        Date.now()
      )(player.energyLog)
    }))
  }
}
