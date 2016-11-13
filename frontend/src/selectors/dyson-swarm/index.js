import currentValue from 'calculators/current-value'
import {DYSON_SWARM_ENERGY_GENERATION_FACTOR} from 'constants'

export default (state) => {
  return {
    ...state,
    dysonSwarms: state.dysonSwarms.map((dysonSwarm) => ({
      ...dysonSwarm,

      currentEnergy: currentValue(
        (previousValue, eventLoops) => previousValue === 0 || eventLoops < 0
          ? 0
          : previousValue + (eventLoops * DYSON_SWARM_ENERGY_GENERATION_FACTOR),
        Date.now()
      )(dysonSwarm.energyLog)
    }))
  }
}
