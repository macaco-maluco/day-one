import Alea from 'alea'
import { range } from 'ramda'
import { GRID_PARTICLES } from 'constants'

import seedableRandom from 'helpers/seedable-random'

const { floor, abs, ceil } = Math

const deviation = (noise, counter) => 50 * abs(seedableRandom(noise, counter))

const addParticleDeviation = (position, noise) =>
  position.map((x, i) => x + deviation(noise, i + 1))

const random = seed => {
  const r = new Alea(seed)

  return r()
}

export default seed => universe => {
  const { viewport, cameraPosition } = universe
  const viewportInGrid = viewport.map(x => ceil(x / GRID_PARTICLES))

  const myPositionInTheGrid = cameraPosition.map(x => floor(x / GRID_PARTICLES))

  const ranges = viewportInGrid.map((x, i) => [
    myPositionInTheGrid[i] - ceil(x / 2) - 1,
    myPositionInTheGrid[i] + ceil(x / 2) + 1
  ])

  const xRange = range(ranges[0][0], ranges[0][1])

  const yRange = range(ranges[1][0], ranges[1][1])

  const matrix = xRange.map(x => yRange.map(y => [x, y])).reduce((a, b) => a.concat(b), [])

  const gridToDots = dot => dot.map(x => x * GRID_PARTICLES)

  const particleMatrix = matrix
    .map(dot => [...gridToDots(dot), random(seed + dot.join('.'))])
    .map(dot => ({ position: addParticleDeviation([dot[0], dot[1]], dot[2]), noise: dot[2] }))

  return {
    ...universe,
    particleMatrix
  }
}
