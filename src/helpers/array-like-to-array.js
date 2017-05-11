import { compose, sort, keys, reduce } from 'ramda'

export default o =>
  o instanceof Array
    ? o
    : compose(reduce((a, k) => [...a, o[k]], []), sort((a, b) => a > b), keys)(o)
