import { POPULATION_GROWTH_FACTOR, TICK } from 'constants'
const { floor } = Math

const growthFactor = (timestamp, now) =>
  (1 + (now - timestamp) / TICK) * POPULATION_GROWTH_FACTOR

export default (state) => ({
  ...state,
  shipPopulation: state
    .populationLog
    .map(([entry, timestamp]) => floor(entry * growthFactor(timestamp, state.now)))
    .reduce((sum, population) => sum + population, 0)
})
