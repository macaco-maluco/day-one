import {compose, reduce} from 'ramda'
import {EVENT_LOOP} from 'constants'

const {floor} = Math

export default (calculate, now) => (log) =>
floor(
  compose(
    // Get the update to a virtual entry "now"
    (lastValue) => update(calculate)(lastValue, [0, now]),

    // Flatten all the values to the last value
    reduce(update(calculate), [0, 0])
  )(log)[0]
)

const update = (calculate) => (previous, current) => {
  const [previousValue, previousTime] = previous
  const [value, time] = current
  const eventLoops = (time - previousTime) / EVENT_LOOP

  const updatedValue = calculate(previousValue, eventLoops)

  return [updatedValue + value, time]
}
