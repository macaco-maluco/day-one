import {range} from 'ramda'
import {betweenFloat, betweenInteger} from 'helpers/between'
import random from 'random'
import {
  STAR_RADIUS_MAXIMUM,
  ORBIT_STEP_MAXIMUM,
  ORBIT_STEP_MINIMUM
} from 'constants'

export default (constants) => (system) => {
  return {
    ...system,
    orbits: range(0, system.planets.length)
      .reduce((orbits, index) => {
        const rotation = 2 * Math.PI

        const radius = getOrbit(
          random(system.noise + index),
          (index === 0
            ? STAR_RADIUS_MAXIMUM
            : orbits[index - 1].radius)
        )

        const startTranslation = betweenFloat(random(system.noise + index), 0, rotation)
        const endTranslation = betweenFloat(random(system.noise + index), rotation, (5 * rotation))

        return [
          ...orbits,
          {
            startTranslation,
            endTranslation,
            radius
          }
        ]
      }, [])
  }
}

const getOrbit = (noise, previousOrbit) =>
  betweenInteger(noise, ORBIT_STEP_MINIMUM, ORBIT_STEP_MAXIMUM) + previousOrbit
