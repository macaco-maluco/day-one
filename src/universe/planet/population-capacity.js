import { betweenInteger } from 'helpers/between'
import {
  POPULATION_CAPACITY_MAXIMUM,
  POPULATION_CAPACITY_MINIMUM
} from 'constants'

export default (constants) => (planet) => ({
  ...planet,
  populationCapacity: betweenInteger(planet.noise, POPULATION_CAPACITY_MINIMUM, POPULATION_CAPACITY_MAXIMUM)
})
