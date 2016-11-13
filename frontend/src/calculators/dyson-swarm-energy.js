import currentValue from './current-value'
import {DYSON_SWARM_ENERGY_GENERATION_FACTOR} from 'constants'

export default (log) => currentValue(
  (previousValue, eventLoops) => previousValue === 0 || eventLoops < 0
    ? 0
    : previousValue + (eventLoops * DYSON_SWARM_ENERGY_GENERATION_FACTOR),
  Date.now()
)(log)
