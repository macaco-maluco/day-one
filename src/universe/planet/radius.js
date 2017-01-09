import { betweenInteger } from 'helpers/between'
import {
  PLANET_RADIUS_MINIMUM,
  PLANET_RADIUS_MAXIMUM
} from 'constants'

export default ({planetRadiusMaximum, planetRadiusMinimum}) => (planet) => ({
  ...planet,
  radius: betweenInteger(planet.noise, planetRadiusMinimum, planetRadiusMaximum)
})
