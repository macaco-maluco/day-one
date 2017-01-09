import {range} from 'ramda'
import {betweenInteger} from 'helpers/between'
import random from 'random'
import generatePlanet from '../planet'

export default (constants) => (system) => ({
  ...system,
  planets: range(0, getNumberOfPlanets(constants)(system.noise))
    .map((index) => generatePlanet(constants)(random(system.noise + index)))
})

const getNumberOfPlanets = ({
  solarSystemPlanetsMinimum,
  solarSystemPlanetsMaximum
}) => (noise) =>
  betweenInteger(
    random(noise + 3),
    solarSystemPlanetsMinimum,
    solarSystemPlanetsMaximum
  )
