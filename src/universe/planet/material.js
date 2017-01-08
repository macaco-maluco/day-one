import { betweenInteger } from 'helpers/between'

export default ({materials}) => (planet) => ({
  ...planet,
  material: materials[betweenInteger(planet.noise, 0, materials.length)]
})
