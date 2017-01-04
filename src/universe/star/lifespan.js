import seedableRandom from 'helpers/seedable-random'

export default (constants) => (star) => ({
  ...star,
  lifespan: seedableRandom(star.noise, 101)
})
