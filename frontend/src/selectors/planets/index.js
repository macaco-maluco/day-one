import currentValue from 'calculators/current-value'
import planetPopulation from 'calculators/planet-population'
import {ENERGY_CONSUMPTION_FACTOR} from 'constants'

export default (state) => {
  return {
    ...state,
    planets: state.planets.map((planet) => ({
      ...planet,

      currentPopulation: planetPopulation(planet.populationLog),

      currentEnergy: currentValue(
        (previousValue, eventLoops) => previousValue === 0
          ? 0
          : previousValue - (eventLoops * ENERGY_CONSUMPTION_FACTOR),
        Date.now()
      )(planet.energyLog)
    }))
  }
}
