import { compose } from 'ramda'

const star = (noise) => (starSystem) => ({
  ...starSystem,
  noise
})

const name = (noise) => (starSystem) => ({
  ...starSystem,
  name: generateName(noise)
})

export default ({ noise }) => compose(
  name(noise),
  star(noise)
)(noise)
