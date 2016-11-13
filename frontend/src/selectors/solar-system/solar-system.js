import {compose} from 'ramda'
import {betweenInteger} from 'helpers/between'
import seedableRandom from 'helpers/seedable-random'
import starName from 'helpers/planet-name'
import getPlanets from './planet'

import {
  GRID_SIZE,
  STAR_RADIUS_MINIMUM,
  STAR_RADIUS_MAXIMUM,
  STAR_TYPES,
  STAR_TYPES_THRESHOLDS
} from 'constants'

const {abs} = Math

export default (x) => {
  return compose(
    getPlanets,
    getStarRadius,
    getStarType,
    getBirth,
    getName,
    addDeviation,
    toObject
  )(x)
}

const toObject = ([x, y, noise]) => ({position: [x, y], noise, id: [x, y, noise]})

const deviation = (noise, counter) =>
  GRID_SIZE / 2 * abs(seedableRandom(noise, counter))

const addDeviation = (solarSystem) => ({
  ...solarSystem,
  position: solarSystem.position
    .map((x, i) => x + deviation(solarSystem.noise, i + 1))
})

const getName = (solarSystem) => {
  return {
    ...solarSystem,
    name: starName(solarSystem.noise)
  }
}

const getStarType = (solarSystem) => ({
  ...solarSystem,
  starType: calculateStarType(solarSystem.lifespan)
})

const calculateStarType = (lifespan) => {
  if (lifespan < STAR_TYPES_THRESHOLDS.O) {
    return STAR_TYPES.O
  }

  if (lifespan < STAR_TYPES_THRESHOLDS.F) {
    return STAR_TYPES.F
  }

  if (lifespan < STAR_TYPES_THRESHOLDS.G) {
    return STAR_TYPES.G
  }

  if (lifespan < STAR_TYPES_THRESHOLDS.K) {
    return STAR_TYPES.K
  }

  if (lifespan < STAR_TYPES_THRESHOLDS.M) {
    return STAR_TYPES.M
  }
}

const getStarRadius = (solarSystem) => ({
  ...solarSystem,
  starRadius: betweenInteger(
    (1 - solarSystem.lifespan),
    STAR_RADIUS_MINIMUM,
    STAR_RADIUS_MAXIMUM
  )
})

const getBirth = (solarSystem) => {
  const lifespan = seedableRandom(solarSystem.noise, 101)
  const birth = calculateBirth(
    lifespan,
    seedableRandom(solarSystem.noise, 100)
  )

  return {
    ...solarSystem,
    lifespan,
    birth
  }
}

const calculateBirth = (lifespan, birthNoise) => {
  // ie. .8 for a .2 star (short lived star)
  const birthRange = 1 - lifespan

  // ie. for a .2 star (.8 birthRange) and .8 birthNoise, it will be .64
  const unWeightedBirth = birthRange * birthNoise

  // ie. for a .64 unWeightedBirth and .2 start, it will be .128
  const birth = unWeightedBirth * lifespan

  return birth
}
