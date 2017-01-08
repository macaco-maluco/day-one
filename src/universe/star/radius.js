import {betweenInteger} from 'helpers/between'

export default ({starRadiusMinimum, starRadiusMaximum}) => (star) => {
  return {
    ...star,
    radius: betweenInteger(
      (1 - star.lifespan),
      starRadiusMinimum,
      starRadiusMaximum
    )
  }
}
