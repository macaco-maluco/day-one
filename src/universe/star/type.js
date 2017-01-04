import {
  STAR_TYPES,
  STAR_TYPES_THRESHOLDS
} from 'constants'

export default (constants) => (star) => {
  if (star.lifespan < STAR_TYPES_THRESHOLDS.O) {
    return { ...star, type: STAR_TYPES.O }
  }

  if (star.lifespan < STAR_TYPES_THRESHOLDS.F) {
    return { ...star, type: STAR_TYPES.F }
  }

  if (star.lifespan < STAR_TYPES_THRESHOLDS.G) {
    return { ...star, type: STAR_TYPES.G }
  }

  if (star.lifespan < STAR_TYPES_THRESHOLDS.K) {
    return { ...star, type: STAR_TYPES.K }
  }

  if (star.lifespan < STAR_TYPES_THRESHOLDS.M) {
    return { ...star, type: STAR_TYPES.M }
  }
}

