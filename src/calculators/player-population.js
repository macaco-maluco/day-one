import currentValue from './current-value'

export default currentValue(
  (previousValue, eventLoops) => previousValue,
  Date.now()
)
