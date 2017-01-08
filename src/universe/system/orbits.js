import {range} from 'ramda'
import {betweenFloat, betweenInteger} from 'helpers/between'
import random from 'random'

export default ({
  orbitStepMinimum,
  orbitStepMaximum,
  orbitSpeedFactor,
  starRadiusMaximum
}) => (system) => {
  return {
    ...system,
    orbits: range(0, system.planets.length)
      .reduce((orbits, index) => {
        const rotation = 2 * Math.PI

        const orbitNoise = random(system.noise + index)
        const previousOrbit = index === 0
          ? starRadiusMaximum
          : orbits[index - 1].radius
        const radius = betweenInteger(orbitNoise, orbitStepMinimum, orbitStepMaximum) + previousOrbit

        const radialSpeedDecay = Math.pow(radius, 3) / 100000
        const startTranslation = betweenFloat(random(system.noise + index), 0, rotation)
        const duration = (
          betweenFloat(
            random(system.noise + index),
            orbitSpeedFactor * rotation,
            orbitSpeedFactor * 5 * rotation
          ) / radialSpeedDecay
        )

        return [
          ...orbits,
          {
            startTranslation,
            endTranslation: startTranslation + duration,
            radius
          }
        ]
      }, [])
  }
}
