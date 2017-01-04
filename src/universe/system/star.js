import generateStar from '../star'

export default (constants) => (system) => ({
  ...system,
  star: generateStar(constants)(system.noise)
})
