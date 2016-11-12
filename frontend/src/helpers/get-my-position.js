import seedableRandom from './seedable-random'
const {floor, pow} = Math
const SIZE = pow(10, 16)

export default (seed) => [
  seedableRandom(seed + 'position', 0),
  seedableRandom(seed + 'position', 1)
]
  .map((x) => SIZE * x)
  .map(floor)
