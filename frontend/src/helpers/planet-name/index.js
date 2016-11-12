import {times} from 'ramda'

import {NAME_WORDS_MINIMUM, NAME_WORDS_MAXIMUM} from 'constants'
import seedableRandom from 'helpers/seedable-random'
import {betweenInteger} from 'helpers/between'
import NAMES from './names'

export default (seed) => {
  return times(
    (index) => NAMES[betweenInteger(seedableRandom(seed, index), 0, NAMES.length)],
    betweenInteger(seed, NAME_WORDS_MINIMUM, NAME_WORDS_MAXIMUM)
  ).join('')
}
