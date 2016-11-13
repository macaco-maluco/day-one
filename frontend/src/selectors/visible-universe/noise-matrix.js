import Alea from 'alea'
import {range} from 'ramda'
import {GRID_SIZE} from 'constants'

const {floor, ceil} = Math

const random = (seed) => {
  const r = new Alea(seed)

  return r()
}

export default (seed, ids) => (universe) => {
  const { viewport, cameraPositionStart, cameraPosition } = universe
  const viewportInGrid = viewport.map((x) => ceil(x / GRID_SIZE))

  const myPositionInTheGrid = cameraPositionStart
    .map((x, i) => x - cameraPosition[i])
    .map((x) => floor(x / GRID_SIZE))

  const ranges = viewportInGrid.map((x, i) => [
    myPositionInTheGrid[i] - ceil(x / 2) - 1,
    myPositionInTheGrid[i] + ceil(x / 2) + 1
  ])

  const xRange = range(ranges[0][0], ranges[0][1])

  const yRange = range(ranges[1][0], ranges[1][1])

  const matrix = xRange
    .map((x) => yRange.map((y) => [x, y]))
    .reduce((a, b) => a.concat(b), [])

  const gridToDots = (dot) =>
    dot
      .map((x) => x * GRID_SIZE)

  const noiseMatrix = matrix.map((dot) => [
    ...(gridToDots(dot)),
    random(seed + dot.join('.'))
  ]).concat(ids)

  return {
    ...universe,
    noiseMatrix
  }
}
