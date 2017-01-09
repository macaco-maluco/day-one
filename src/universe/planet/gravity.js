import { betweenFloat } from 'helpers/between'

export default ({gravityMaximum, gravityMinimum}) => (planet) => ({
  ...planet,
  gravity: betweenFloat(planet.noise, gravityMinimum, gravityMaximum)
})
