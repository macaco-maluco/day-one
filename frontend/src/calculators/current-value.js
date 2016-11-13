export default (growthFactor, now) => (log) => compose(
  // Get the update to a virtual entry "now"
  (lastValue) => update(lastValue, [0, now]),

  // Flatten all the values to the last value
  reduce(update(growthFactor), [0, 0])
)(log)

const update = (growthFactor) => (previous, current) => {
  const [previousValue, previousTime] = previous
  const [value, time] = current
  const eventLoops = time - (previousTime / EVENT_LOOP)

  const updatedValue = previousValue * eventLoops * growthFactor

  return [updatedValue + value, time]
}
