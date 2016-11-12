import {SOLAR_SYSTEM_CUT_FACTOR} from 'constants'

const {floor} = Math

export default (universe) => {
  const solarSystems = universe.noiseMatrix
    .filter(([x, y, noise]) => noise > SOLAR_SYSTEM_CUT_FACTOR)
    .map(([x, y, noise]) => ({
      position: [x, y],
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
