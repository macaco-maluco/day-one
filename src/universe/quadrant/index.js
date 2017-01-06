import { compose } from 'ramda'
import structure from './structure'
import systems from './systems'

const quadrant = (noise, size, coordinates) => ({
  noise,
  size,
  coordinates
})

export default (constants) => compose(
  systems(constants),
  structure(constants),
  quadrant
)
