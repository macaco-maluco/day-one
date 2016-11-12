import {SOLAR_SYSTEM_CUT_FACTOR, GRID_SIZE} from 'constants'

const {floor, abs} = Math

export default (universe) => {
  const deviation = (noise) => GRID_SIZE / 2 * abs(noise)
  const solarSystems = universe.noiseMatrix
    .filter(([x, y, noise]) => noise > SOLAR_SYSTEM_CUT_FACTOR)
    .map(([x, y, noise]) => ({
      position: [x + deviation(noise), y + deviation(noise)],
      noise
    }))
    .map(lifespan)
    .map(getPlanets)

  return {
    ...universe,
    solarSystems
  }
}

const lifespan = (solarSystem) => ({
  ...solarSystem,
  lifespan: floor(solarSystem.noise * 10000)
})

const getPlanets = (solarSystem) => ({
  ...solarSystem,
  planets: [{
    gravity: 1,
    material: 'water',
    orbit: 20,
    populationCapacity: 1000
  }, {
    gravity: 1,
    material: 'plutonium',
    orbit: 30,
    populationCapacity: 300
  }, {
    gravity: 1,
    material: 'hydrogen',
    orbit: 50,
    populationCapacity: 0
  }, {
    gravity: 1,
    material: 'iron',
    orbit: 70,
    populationCapacity: 500
  }]
})
