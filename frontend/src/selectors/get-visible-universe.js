import {compose} from 'ramda'
import noiseMatrix from './noise-matrix'
import getSolarSystem from './get-solar-system'
const {floor} = Math

const dotToPixels = (universe) => {
  const topLeftDot = universe.viewport
    .map((x) => floor(x / 2))
    .map((x, i) => universe.position[i] - x)

  return {
    ...universe,
    solarSystems: universe.solarSystems.map((solarSystem) => ({
      ...solarSystem,
      pixelPosition: solarSystem.position.map((c, i) => c - topLeftDot[i])
    }))
  }
}

export default compose(
  dotToPixels,
  getSolarSystem,
  noiseMatrix('seed')
)
