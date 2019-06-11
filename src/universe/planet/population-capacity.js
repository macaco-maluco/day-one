import { betweenInteger } from 'helpers/between'

export default ({
  populationCapacityMaximum,
  populationCapacityMinimum
}) => (planet) => ({
  ...planet,
  populationCapacity: betweenInteger(planet.noise, populationCapacityMinimum, populationCapacityMaximum)
})
