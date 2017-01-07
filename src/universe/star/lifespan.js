import random from 'random'

export default (constants) => (star) => ({
  ...star,
  lifespan: random(star.noise + 101)
})
