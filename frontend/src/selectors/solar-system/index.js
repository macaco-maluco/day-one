import {compose, range} from 'ramda'
import {betweenFloat, betweenInteger} from 'helpers/between'
import seedableRandom from 'helpers/seedable-random'
import planetName from 'helpers/planet-name'

import {
  GRAVITY_MAXIMUM,
  GRAVITY_MINIMUM,
  GRID_SIZE,
  MATERIALS,
  ORBIT_STEP_MAXIMUM,
  ORBIT_STEP_MINIMUM,
  PLANET_RADIUS_MINIMUM,
  PLANET_RADIUS_MAXIMUM,
  POPULATION_CAPACITY_MINIMUM,
  POPULATION_CAPACITY_MAXIMUM,
  SOLAR_SYSTEM_PLANETS_MAXIMUM,
  SOLAR_SYSTEM_PLANETS_MINIMUM,
  STAR_RADIUS_MINIMUM,
  STAR_RADIUS_MAXIMUM,
  UNIVERSE_LIFESPAN
} from 'constants'

const {floor, abs} = Math

const RANDOMS = {
  X_DEVIATION: 1,
  Y_DEVIATION: 2,
  NUMBER_OF_PLANETS: 3,
  GRAVITY: 4,
  ORBIT: 5,
  POPULATION_CAPACITY: 6
}

export default (universeAge) => compose(
  getPlanets(universeAge),
  getStarRadius,
  getTimeLeft(universeAge),
  getName,
  getLifespan,
  addDeviation,
  toObject
)

const toObject = ([x, y, noise]) => ({position: [x, y], noise})

const deviation = (noise, counter) =>
  GRID_SIZE / 2 * abs(seedableRandom(noise, counter))

const addDeviation = (solarSystem) => ({
  ...solarSystem,
  position: solarSystem.position
    .map((x, i) => x + deviation(solarSystem.noise, i + 1))
})

const getName = (solarSystem) => {
  return {
    ...solarSystem,
    name: planetName(solarSystem.noise)
  }
}

const getLifespan = (solarSystem) => ({
  ...solarSystem,
  lifespan: floor(solarSystem.noise * UNIVERSE_LIFESPAN)
})

const getTimeLeft = (universeAge) => (solarSystem) => ({
  ...solarSystem,
  timeLeft: solarSystem.lifespan - universeAge
})

const getStarRadius = (solarSystem) => ({
  ...solarSystem,
  starRadius: betweenInteger(
    1 - (solarSystem.lifespan / UNIVERSE_LIFESPAN),
    STAR_RADIUS_MINIMUM,
    STAR_RADIUS_MAXIMUM
  )
})

const getPlanets = (now) => (solarSystem) => {
  const {noise} = solarSystem
  const seeds = {
    gravity: seedableRandom(noise, RANDOMS.GRAVITY),
    material: seedableRandom(noise, RANDOMS.MATERIAL),
    orbit: seedableRandom(noise, RANDOMS.ORBIT),
    populationCapacity: seedableRandom(noise, RANDOMS.POPULATION_CAPACITY)
  }

  return {
    ...solarSystem,
    planets: range(0, getNumberOfPlanets(noise))
      .reduce((planets, index) => [
        ...planets,
        {
          gravity: getGravity(seedableRandom(seeds.gravity, index)),
          material: getMaterial(seedableRandom(seeds.material, index)),
          radius: getPlanetRadius(seedableRandom(seeds.gravity, index)),
          orbit: getOrbit(
            seedableRandom(seeds.orbit, index),
            (index === 0
              ? STAR_RADIUS_MAXIMUM
              : planets[index - 1].orbit)
          ),
          populationCapacity: getPopulationCapacity(seedableRandom(seeds.populationCapacity, index))
        }
      ], [])
      .map((planet) => ({
        ...planet,
        translation: (now / (planet.orbit * planet.orbit))
      }))
  }
}

const getPlanetRadius = (noise) =>
  betweenInteger(noise, PLANET_RADIUS_MINIMUM, PLANET_RADIUS_MAXIMUM)

const getGravity = (noise) =>
  betweenFloat(noise, GRAVITY_MINIMUM, GRAVITY_MAXIMUM)

const getMaterial = (noise) =>
  MATERIALS[betweenInteger(noise, 0, MATERIALS.length)]

const getOrbit = (noise, previousOrbit) =>
  betweenInteger(noise, ORBIT_STEP_MINIMUM, ORBIT_STEP_MAXIMUM) + previousOrbit

const getPopulationCapacity = (noise) =>
  betweenInteger(noise, POPULATION_CAPACITY_MINIMUM, POPULATION_CAPACITY_MAXIMUM)

const getNumberOfPlanets = (noise) =>
  betweenInteger(
    seedableRandom(noise, RANDOMS.NUMBER_OF_PLANETS),
    SOLAR_SYSTEM_PLANETS_MINIMUM,
    SOLAR_SYSTEM_PLANETS_MAXIMUM
  )
