import { compose } from 'ramda'
import planets from './planets'
import star from './star'
import orbits from './orbits'

const system = (noise) => ({
  noise
})

export default (constants) => compose(
  orbits(constants),
  planets(constants),
  star(constants),
  system
)
