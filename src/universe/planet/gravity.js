import { betweenFloat } from 'helpers/between'
import {
  GRAVITY_MAXIMUM,
  GRAVITY_MINIMUM
} from 'constants'

export default (constants) => (planet) => ({
  ...planet,
  gravity: betweenFloat(planet.noise, GRAVITY_MINIMUM, GRAVITY_MAXIMUM)
})
