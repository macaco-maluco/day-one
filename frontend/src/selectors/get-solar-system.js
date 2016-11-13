import {compose, filter, map} from 'ramda'
import toSolarSystem from './solar-system'
import {
  SOLAR_SYSTEM_CUT_FACTOR,
  SOLAR_SYSTEM_STAGES
} from 'constants'

export default (universe) => {
  const universeAge = universe.now - universe.bigBang
  const normalizedUniverseAge = universeAge / (universe.heatDeath - universe.bigBang)

  const solarSystems = compose(
    map(getStage(normalizedUniverseAge)),
    map(translatePlanets(universeAge)),
    map(toSolarSystem),
    cutOut
  )(universe.noiseMatrix)

  return {
    ...universe,
    solarSystems
  }
}

const cutOut = filter(([x, y, noise]) => noise > SOLAR_SYSTEM_CUT_FACTOR)

const translatePlanets = (universeAge) => (solarSystem) => {
  return {
    ...solarSystem,
    planets: solarSystem.planets.map((planet) => ({
      ...planet,
      translation: (universeAge / (planet.orbit * planet.orbit))
    }))
  }
}

const getStage = (normalizedUniverseAge) => (solarSystem) => ({
  ...solarSystem,
  stage: calculateStage(
    normalizedUniverseAge,
    solarSystem.birth,
    solarSystem.lifespan
  )
})

const calculateStage = (normalizedNow, birth, lifespan) => {
  if (normalizedNow < birth) {
    return SOLAR_SYSTEM_STAGES.ACCRETION_DISK
  }

  if (normalizedNow < (birth + lifespan)) {
    return SOLAR_SYSTEM_STAGES.MAIN_SEQUENCE
  }

  return SOLAR_SYSTEM_STAGES.WHITE_DWARF
}
