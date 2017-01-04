import { compose } from 'ramda'
import radius from './radius'
import populationCapacity from './population-capacity'
import gravity from './gravity'
import material from './material'

const planet = (noise) => ({
  noise
})

export default (constants) => compose(
  populationCapacity(constants),
  gravity(constants),
  material(constants),
  radius(constants),
  planet
)
