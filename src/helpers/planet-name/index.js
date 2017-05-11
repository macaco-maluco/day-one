import { times } from 'ramda'

import { NAME_WORDS_MINIMUM, NAME_WORDS_MAXIMUM } from 'constants'
import seedableRandom from 'helpers/seedable-random'
import { betweenInteger } from 'helpers/between'
import NAMES from './names'

const locales = Object.keys(NAMES)

export default seed => {
  const locale = locales[betweenInteger(seedableRandom(seed, 0), 0, locales.length)]
  const localizedNames = NAMES[locale]
  const amountOfWords = betweenInteger(seed, NAME_WORDS_MINIMUM, NAME_WORDS_MAXIMUM)

  return times(index => selectName(localizedNames, seed, index), amountOfWords).join('')
}

const selectName = (list, seed, index) =>
  list[betweenInteger(seedableRandom(seed, index), 0, list.length - 1)]
