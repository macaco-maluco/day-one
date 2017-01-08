export default ({starTypes, starTypesThresholds}) => (star) => {
  if (star.lifespan < starTypesThresholds.O) {
    return { ...star, type: starTypes.O }
  }

  if (star.lifespan < starTypesThresholds.F) {
    return { ...star, type: starTypes.F }
  }

  if (star.lifespan < starTypesThresholds.G) {
    return { ...star, type: starTypes.G }
  }

  if (star.lifespan < starTypesThresholds.K) {
    return { ...star, type: starTypes.K }
  }

  if (star.lifespan < starTypesThresholds.M) {
    return { ...star, type: starTypes.M }
  }
}
