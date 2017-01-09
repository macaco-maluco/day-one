import {times} from 'ramda'
import random from 'random'
import {betweenInteger} from 'helpers/between'
import nameDatabase from './name-database'

const locales = Object.keys(nameDatabase)

export default ({nameWordsMinimum, nameWordsMaximum}) => (star) => {
  const locale = locales[betweenInteger(random(star.noise), 0, locales.length)]
  const localizedNames = nameDatabase[locale]
  const amountOfWords = betweenInteger(star.noise, nameWordsMinimum, nameWordsMaximum)

  const name = times((index) => selectName(localizedNames, star.noise, index), amountOfWords).join('')
  return { ...star, name }
}

const selectName = (list, seed, index) =>
  list[betweenInteger(random(seed + index), 0, list.length - 1)]
