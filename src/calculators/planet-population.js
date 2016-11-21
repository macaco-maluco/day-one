import currentValue from './current-value'
import {POPULATION_GROWTH_FACTOR} from 'constants'

export default (log) => {
  return currentValue(
    (previousValue, eventLoops) => previousValue === 0
      ? 0
      : previousValue + (eventLoops * POPULATION_GROWTH_FACTOR),
    Date.now()
  )(log)
}
