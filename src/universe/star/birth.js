export default () => (star) => ({
  ...star,
  birth: calculateBirth(star.lifespan, (star.noise, 100))
})

const calculateBirth = (lifespan, birthNoise) => {
  // ie. .8 for a .2 star (short lived star)
  const birthRange = 1 - lifespan

  // ie. for a .2 star (.8 birthRange) and .8 birthNoise, it will be .64
  const unWeightedBirth = birthRange * birthNoise

  // ie. for a .64 unWeightedBirth and .2 start, it will be .128
  const birth = unWeightedBirth * lifespan

  return birth
}
