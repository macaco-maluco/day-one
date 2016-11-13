import Alea from 'alea'
import {range} from 'ramda'
import {GRID_PARTICLES} from 'constants'

const {floor, ceil} = Math

const random = (seed) => {
  const r = new Alea(seed)

  return r()
}

export default (seed) => (universe) => {
  const { viewport, cameraPositionStart, cameraPosition } = universe
  const viewportInGrid = viewport.map((x) => ceil(x / GRID_PARTICLES))

  const myPositionInTheGrid = cameraPositionStart
    .map((x, i) => x - cameraPosition[i])
    .map((x) => floor(x / GRID_PARTICLES))

  const ranges = viewportInGrid.map((x, i) => [
    myPositionInTheGrid[i] - ceil(x / 2) - 1,
    myPositionInTheGrid[i] + ceil(x / 2) + 1
  ])

  const xRange = range(ranges[0][0], ranges[0][1])

  const yRange = range(ranges[1][0], ranges[1][1])

  const matrix = xRange.map((x) => yRange.map((y) => [x, y])).reduce((a, b) => a.concat(b), [])

  const gridToDots = (dot) =>
    dot
      .map((x) => x * GRID_PARTICLES)

  const particleMatrix = matrix.map((dot) => [
    ...(gridToDots(dot)),
    random(seed + 'back' + dot.join('.'))
  ])

  return {
    ...universe,
    particleMatrix
  }
}
