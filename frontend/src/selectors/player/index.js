import currentValue from 'calculators/current-value'
import {POPULATION_GROWTH_FACTOR, ENERGY_CONSUMPTION_FACTOR} from 'constants'

export default (state) => {
  return {
    ...state,
    players: state.players.map((player) => ({
      ...player,

      currentPopulation: currentValue(
        (previousValue, eventLoops) => previousValue === 0
          ? 0
          : previousValue + (eventLoops * POPULATION_GROWTH_FACTOR),
        Date.now()
      )(player.populationLog),

      currentEnergy: currentValue(
        (previousValue, eventLoops) => previousValue === 0
          ? 0
          : previousValue - (eventLoops * ENERGY_CONSUMPTION_FACTOR),
        Date.now()
      )(player.energyLog)
    }))
  }
}
