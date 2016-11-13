import {compose, filter, map} from 'ramda'
import toSolarSystem from './solar-system'
import translatePlanets from './translate-planets'
import {
  FUSION_DURATION,
  RED_GIANT_DURATION,
  SOLAR_SYSTEM_CUT_FACTOR,
  SOLAR_SYSTEM_LIFESPAN_THRESHOLDS,
  SOLAR_SYSTEM_STAGES,
  STAR_END_STAGES,
  SUPERNOVA_DURATION
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

const getStage = (normalizedUniverseAge) => (solarSystem) => ({
  ...solarSystem,
  stage: calculateStage(
    normalizedUniverseAge,
    solarSystem.birth,
    solarSystem.lifespan
  )
})

const calculateStage = (normalizedNow, birth, lifespan) => {
  const endStage = calculateEndStage(lifespan)
  const death = (birth + lifespan)

  if (normalizedNow < birth - FUSION_DURATION) {
    return SOLAR_SYSTEM_STAGES.ACCRETION_DISK
  }

  if (normalizedNow < birth) {
    return SOLAR_SYSTEM_STAGES.FUSION_START
  }

  if (normalizedNow < death) {
    return SOLAR_SYSTEM_STAGES.MAIN_SEQUENCE
  }

  switch (endStage) {
    case STAR_END_STAGES.BLACK_HOLE:
    case STAR_END_STAGES.NEUTRON_STAR:
      if (normalizedNow < death + SUPERNOVA_DURATION) {
        return SOLAR_SYSTEM_STAGES.SUPERNOVA
      }

      return endStage

    case STAR_END_STAGES.WHITE_DWARF:
      if (normalizedNow < death + RED_GIANT_DURATION) {
        return SOLAR_SYSTEM_STAGES.RED_GIANT
      }

      return endStage

    default:
      return endStage
  }
}

const calculateEndStage = (lifespan) => {
  if (lifespan < SOLAR_SYSTEM_LIFESPAN_THRESHOLDS.BLACK_HOLE) {
    return STAR_END_STAGES.BLACK_HOLE
  }

  if (lifespan < SOLAR_SYSTEM_LIFESPAN_THRESHOLDS.NEUTRON_STAR) {
    return STAR_END_STAGES.NEUTRON_STAR
  }

  if (lifespan < SOLAR_SYSTEM_LIFESPAN_THRESHOLDS.WHITE_DWARF) {
    return STAR_END_STAGES.WHITE_DWARF
  }

  if (lifespan < SOLAR_SYSTEM_LIFESPAN_THRESHOLDS.BROWN_DWARF) {
    return STAR_END_STAGES.BROWN_DWARF
  }
}
