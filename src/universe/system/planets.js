import {range} from 'ramda'
import {betweenInteger} from 'helpers/between'
import seedableRandom from 'helpers/seedable-random'
import {
  SOLAR_SYSTEM_PLANETS_MAXIMUM,
  SOLAR_SYSTEM_PLANETS_MINIMUM
} from 'constants'
import generatePlanet from '../planet'

export default (constants) => (system) => ({
  ...system,
  planets: range(0, getNumberOfPlanets(system.noise))
    .map((index) => generatePlanet(constants)(seedableRandom(system.noise, index)))
})

const getNumberOfPlanets = (noise) =>
  betweenInteger(
    seedableRandom(noise, 3),
    SOLAR_SYSTEM_PLANETS_MINIMUM,
    SOLAR_SYSTEM_PLANETS_MAXIMUM
  )
