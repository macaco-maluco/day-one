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
  UNIVERSE_LIFESPAN
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

const toObject = ([x, y, noise]) => ({position: [x, y], noise})

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
  starType: STAR_TYPES[betweenInteger(solarSystem.noise, 0, STAR_TYPES.length)]
})

const getStarRadius = (solarSystem) => ({
  ...solarSystem,
  starRadius: betweenInteger(
    1 - (solarSystem.lifespan / UNIVERSE_LIFESPAN),
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
