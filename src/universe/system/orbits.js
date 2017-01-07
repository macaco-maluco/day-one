import {range} from 'ramda'
import {betweenInteger} from 'helpers/between'
import random from 'random'
import {
  STAR_RADIUS_MAXIMUM,
  ORBIT_STEP_MAXIMUM,
  ORBIT_STEP_MINIMUM
} from 'constants'

export default (constants) => (system) => ({
  ...system,
  orbits: range(0, system.planets.length)
    .reduce((orbits, index) => [
      ...orbits,
      {
        startTranslation: betweenInteger(random(system.noise + index), 0, 360),
        radius: getOrbit(
          random(system.noise + index),
          (index === 0
            ? STAR_RADIUS_MAXIMUM
            : orbits[index - 1].radius)
        )
      }
    ], [])
})

const getOrbit = (noise, previousOrbit) =>
  betweenInteger(noise, ORBIT_STEP_MINIMUM, ORBIT_STEP_MAXIMUM) + previousOrbit
