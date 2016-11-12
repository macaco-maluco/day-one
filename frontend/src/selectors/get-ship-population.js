import { POPULATION_GROWTH_FACTOR, TICK } from 'constants'
const { floor, pow } = Math

const growthFactor = (timestamp, now) =>
  (1 + (now - timestamp) / TICK) * POPULATION_GROWTH_FACTOR

export default (state) => ({
  ...state,
  shipPopulation: state
    .shipPopulationLog
    .map(([entry, timestamp]) => floor(pow(entry, growthFactor(timestamp, state.now))))
    .reduce((sum, population) => sum + population, 0)
})
