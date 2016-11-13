import {range} from 'ramda'
import {betweenFloat, betweenInteger} from 'helpers/between'
import seedableRandom from 'helpers/seedable-random'
import {
  GRAVITY_MAXIMUM,
  GRAVITY_MINIMUM,
  MATERIALS,
  ORBIT_STEP_MAXIMUM,
  ORBIT_STEP_MINIMUM,
  PLANET_RADIUS_MINIMUM,
  PLANET_RADIUS_MAXIMUM,
  POPULATION_CAPACITY_MINIMUM,
  POPULATION_CAPACITY_MAXIMUM,
  SOLAR_SYSTEM_PLANETS_MAXIMUM,
  SOLAR_SYSTEM_PLANETS_MINIMUM,
  STAR_RADIUS_MAXIMUM
} from 'constants'

const RANDOMS = {
  NUMBER_OF_PLANETS: 3,
  GRAVITY: 4,
  ORBIT: 5,
  POPULATION_CAPACITY: 6
}

export default (solarSystem) => {
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
  }
}

const getNumberOfPlanets = (noise) =>
  betweenInteger(
    seedableRandom(noise, RANDOMS.NUMBER_OF_PLANETS),
    SOLAR_SYSTEM_PLANETS_MINIMUM,
    SOLAR_SYSTEM_PLANETS_MAXIMUM
  )

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
