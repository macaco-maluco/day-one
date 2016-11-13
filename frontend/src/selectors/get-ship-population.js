import { POPULATION_GROWTH_FACTOR, TICK, TICK_CAP } from 'constants'
import {range, reduce, compose} from 'ramda'

const { floor, min } = Math

export default (state) => {
  return {
    ...state,
    shipPopulation: compose(
      calculateIntestNow,
      calculateInterestUntilNow,
    )(state.populationLog)
  }
}

const calculateIntestNow = (previousValue) =>
  floor(calculateIntest(previousValue, [0, Date.now()])[0])

const calculateInterestUntilNow = (state) =>
  reduce(calculateIntest, [0, 0], state)

const calculateIntest = (sum, entry) => {
  const value = range(0, min(floor((entry[1] - sum[1]) / TICK), TICK_CAP))
    .reduce((result) => result * POPULATION_GROWTH_FACTOR, sum[0])
  return [value + entry[0], entry[1]]
}
