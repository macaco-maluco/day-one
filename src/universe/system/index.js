import { compose } from 'ramda'
import planets from './planets'
import stages from './stages'
import star from './star'
import orbits from './orbits'

const system = (noise) => ({
  noise
})

export default (constants) => compose(
  stages(constants),
  orbits(constants),
  planets(constants),
  star(constants),
  system
)
