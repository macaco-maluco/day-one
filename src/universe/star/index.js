import { compose } from 'ramda'
import radius from './radius'
import birth from './birth'
import lifespan from './lifespan'
import name from './name'
import type from './type'
import stages from './stages'

const star = (noise) => ({
  noise
})

export default (constants) => compose(
  stages(constants),
  radius(constants),
  type(constants),
  birth(constants),
  lifespan(constants),
  name(constants),
  star
)
