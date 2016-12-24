import {compose} from 'ramda'
import {betweenInteger} from 'helpers/between'
import seedableRandom from 'helpers/seedable-random'
import starName from 'helpers/planet-name'
import getPlanets from './planet'

export default ({
  STAR_RADIUS_MINIMUM,
  STAR_RADIUS_MAXIMUM,
  STAR_TYPES,
  STAR_TYPES_THRESHOLDS
}) => {
  const build = (noise) => ({
    position: [0, 0],
    noise: noise,
    name: '',
    id: [0, 0, noise],
    lifespan: 0,
    birth: 0,
    starType: STAR_TYPES.O,
    starRadius: 0,
    planets: [],
    stage: '',
    pixelPosition: [0, 0]
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

  const getStarRadius = (starSystem) => ({
    ...starSystem,
    starRadius: betweenInteger(
      (1 - starSystem.lifespan),
      STAR_RADIUS_MINIMUM,
      STAR_RADIUS_MAXIMUM
    )
  })

  const getStarType = (starSystem) => ({
    ...starSystem,
    starType: calculateStarType(starSystem.lifespan)
  })

  return compose(
    getPlanets,
    getStarRadius,
    getStarType,
    getBirth,
    getName,
    build
  )
}

const getName = (starSystem) => {
  return {
    ...starSystem,
    name: starName(starSystem.noise)
  }
}

const getBirth = (starSystem) => {
  const lifespan = seedableRandom(starSystem.noise, 101)
  const birth = calculateBirth(
    lifespan,
    seedableRandom(starSystem.noise, 100)
  )

  return {
    ...starSystem,
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
