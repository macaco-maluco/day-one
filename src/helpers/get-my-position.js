import seedableRandom from './seedable-random'
import {SEED, UNIVERSE_SIZE} from 'constants'
const {floor} = Math

export default (seed) => [
  seedableRandom(SEED + 'asdn', 0),
  seedableRandom(SEED + 'ad', 1)
]
  .map((x) => UNIVERSE_SIZE * x)
  .map(floor)
