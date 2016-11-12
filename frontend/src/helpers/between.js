import {compose} from 'ramda'
const {floor} = Math

export const betweenFloat = (noise, minimum, maximum) =>
  (noise * (maximum - minimum)) + minimum

export const betweenInteger = compose(floor, betweenFloat)
