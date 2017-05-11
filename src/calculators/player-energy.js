import currentValue from './current-value'
import { ENERGY_CONSUMPTION_FACTOR } from 'constants'

export default log =>
  currentValue(
    (previousValue, eventLoops) =>
      previousValue === 0 ? 0 : previousValue - eventLoops * ENERGY_CONSUMPTION_FACTOR,
    Date.now()
  )(log)
