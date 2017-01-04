import { betweenInteger } from 'helpers/between'
import {
  PLANET_RADIUS_MINIMUM,
  PLANET_RADIUS_MAXIMUM
} from 'constants'

export default (constants) => (planet) => ({
  ...planet,
  radius: betweenInteger(planet.noise, PLANET_RADIUS_MINIMUM, PLANET_RADIUS_MAXIMUM)
})

