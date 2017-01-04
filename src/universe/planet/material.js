import { betweenInteger } from 'helpers/between'
import {
  MATERIALS
} from 'constants'

export default (constants) => (planet) => ({
  ...planet,
  material: MATERIALS[betweenInteger(planet.noise, 0, MATERIALS.length)]
})
