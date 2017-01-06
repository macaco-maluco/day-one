import Alea from 'alea'
import { range, map } from 'ramda'
import { GRID_SIZE } from 'constants'

const {floor, ceil} = Math

const random = (seed) => {
  const r = new Alea(seed)
  return r()
}

export default (constants) => (quadrant) => {
  const { noise, size, coordinates } = quadrant

  const sizeInGrid = size.map((x) => ceil(x / GRID_SIZE))

  const myPositionInTheGrid = coordinates
    .map((x) => floor(x / GRID_SIZE))

  const ranges = sizeInGrid.map((x, i) => [
    myPositionInTheGrid[i] - ceil(x / 2),
    myPositionInTheGrid[i] + ceil(x / 2)
  ])

  const xRange = range(ranges[0][0], ranges[0][1])

  const yRange = range(ranges[1][0], ranges[1][1])

  const matrix = xRange
    .map((x) => yRange.map((y) => [x, y]))
    .reduce((a, b) => a.concat(b), [])

  const gridToDots = (dot) =>
    dot
      .map((x) => x * GRID_SIZE)

  const mapGridToDots = map((dot) => [
    ...(gridToDots(dot)),
    random(noise + dot.join('.'))
  ])

  return {
    ...quadrant,
    cells: mapGridToDots(matrix)
  }
}
