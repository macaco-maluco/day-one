import {compose, filter, map} from 'ramda'
import toSolarSystem from './solar-system'
import {SOLAR_SYSTEM_CUT_FACTOR} from 'constants'

export default (universe) => {
  const universeAge = universe.now - universe.bigBang

  const solarSystems = compose(
    map(toSolarSystem(universeAge)),
    cutOut
  )(universe.noiseMatrix)

  return {
    ...universe,
    solarSystems
  }
}

const cutOut = filter(([x, y, noise]) => noise > SOLAR_SYSTEM_CUT_FACTOR)
