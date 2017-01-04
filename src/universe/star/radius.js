import {betweenInteger} from 'helpers/between'

import {
  STAR_RADIUS_MINIMUM,
  STAR_RADIUS_MAXIMUM
} from 'constants'

export default (constants) => (star) => {
  return { ...star, radius: betweenInteger(
    (1 - star.lifespan),
    STAR_RADIUS_MINIMUM,
    STAR_RADIUS_MAXIMUM
  )}
}
