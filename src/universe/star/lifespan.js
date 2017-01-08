import random from 'random'

export default () => (star) => ({
  ...star,
  lifespan: random(star.noise + 101)
})
